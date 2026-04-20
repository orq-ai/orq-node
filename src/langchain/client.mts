/**
 * Traces clients for sending OTLP-formatted spans to the Orq API.
 */

import { wrapInOtlpEnvelope } from "./span-builder.mjs";

/**
 * Fire-and-forget client that batches spans and posts OTLP JSON to /v2/otel/v1/traces.
 *
 * Spans are accumulated and flushed after a short delay so that all spans
 * from one trace arrive in a single request.
 */
export class OrqTracesClient {
  private _apiKey: string;
  private _url: string;
  private _pending: Record<string, unknown>[] = [];
  private _flushInterval: number;
  private _timer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    apiKey: string,
    apiUrl: string = "https://my.orq.ai",
    flushInterval: number = 1000,
  ) {
    this._apiKey = apiKey;
    this._url = `${apiUrl.replace(/\/+$/, "")}/v2/otel/v1/traces`;
    this._flushInterval = flushInterval;
  }

  sendSpan(span: Record<string, unknown>): void {
    this._pending.push(span);
    this._scheduleFlush();
  }

  private _scheduleFlush(): void {
    if (this._timer != null) return;
    this._timer = setTimeout(() => {
      this._timer = null;
      this.flush();
    }, this._flushInterval);
    // Prevent the timer from keeping the process alive in Node.js
    if (this._timer && typeof (this._timer as any).unref === "function") {
      (this._timer as any).unref();
    }
  }

  flush(): Promise<void> {
    if (this._pending.length === 0) return Promise.resolve();
    const spans = this._pending.slice();
    this._pending.length = 0;

    const payload = wrapInOtlpEnvelope(spans);
    return fetch(this._url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this._apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => {})
      .catch(() => {
        // silently ignore send errors
      });
  }

  close(): Promise<void> {
    if (this._timer != null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
    return this.flush();
  }
}

/**
 * Async client that batches spans and posts OTLP JSON to /v2/otel/v1/traces.
 *
 * Same debounced flush behaviour as OrqTracesClient but properly awaits
 * the HTTP request.
 */
export class AsyncOrqTracesClient {
  private _apiKey: string;
  private _url: string;
  private _pending: Record<string, unknown>[] = [];
  private _flushInterval: number;
  private _timer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    apiKey: string,
    apiUrl: string = "https://my.orq.ai",
    flushInterval: number = 1000,
  ) {
    this._apiKey = apiKey;
    this._url = `${apiUrl.replace(/\/+$/, "")}/v2/otel/v1/traces`;
    this._flushInterval = flushInterval;
  }

  async sendSpan(span: Record<string, unknown>): Promise<void> {
    this._pending.push(span);
    this._scheduleFlush();
  }

  private _scheduleFlush(): void {
    if (this._timer != null) return;
    this._timer = setTimeout(() => {
      this._timer = null;
      void this.flush();
    }, this._flushInterval);
    // Prevent the timer from keeping the process alive in Node.js
    if (this._timer && typeof (this._timer as any).unref === "function") {
      (this._timer as any).unref();
    }
  }

  async flush(): Promise<void> {
    if (this._pending.length === 0) return;
    const spans = this._pending.slice();
    this._pending.length = 0;

    const payload = wrapInOtlpEnvelope(spans);
    try {
      await fetch(this._url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this._apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch {
      // silently ignore send errors
    }
  }

  async close(): Promise<void> {
    if (this._timer != null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
    await this.flush();
  }
}
