/**
 * In-flight event storage with parent-child tracking.
 *
 * Uses LangChain UUIDs directly (hyphens stripped) as trace/span IDs.
 */

import { InFlightEvent } from "./models.js";

export class Events {
  private _events = new Map<string, InFlightEvent>();
  private _parentMap = new Map<string, string | undefined>();

  store(runId: string, event: InFlightEvent): void {
    this._events.set(runId, event);
  }

  get(runId: string): InFlightEvent | undefined {
    return this._events.get(runId);
  }

  remove(runId: string): void {
    this._events.delete(runId);
  }

  mapParent(runId: string, parentRunId: string | undefined): void {
    this._parentMap.set(runId, parentRunId);
  }

  getTraceId(runId: string): string {
    const root = this._getRoot(runId);
    return root.replace(/-/g, "");
  }

  getSpanId(runId: string): string {
    return runId.replace(/-/g, "");
  }

  private _getRoot(runId: string): string {
    const parent = this._parentMap.get(runId);
    if (parent == null) {
      return runId;
    }
    return this._getRoot(parent);
  }
}
