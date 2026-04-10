/**
 * Global handler registration for automatic LangChain tracing.
 *
 * Unlike the Python SDK, LangChain.js does not have `register_configure_hook`.
 * Users must pass the handler to LangChain calls manually or retrieve it
 * via `getHandler()`.
 */

import { OrqLangchainCallback } from "./handler.js";

let _handler: OrqLangchainCallback | null = null;
let _exitHookRegistered = false;

function getEnvVar(name: string): string | undefined {
  try {
    // Works in Node.js, Deno, Bun, etc.
    const env = (globalThis as any).process?.env;
    return env?.[name] as string | undefined;
  } catch {
    return undefined;
  }
}

function _registerExitHook(): void {
  if (_exitHookRegistered) return;
  const proc = (globalThis as any).process;
  if (proc?.on) {
    proc.on("beforeExit", async () => {
      if (_handler) {
        await _handler.close();
      }
    });
    _exitHookRegistered = true;
  }
}

/**
 * Enable automatic tracing for LangChain/LangGraph calls.
 *
 * Reads `ORQ_API_KEY` from environment if `apiKey` is not provided.
 * Creates a sync (fire-and-forget) handler by default.
 *
 * Registers a `beforeExit` hook so pending traces are flushed
 * automatically when the process exits.
 */
export function setup(options?: {
  apiKey?: string;
  apiUrl?: string;
}): void {
  const key = options?.apiKey ?? getEnvVar("ORQ_API_KEY");
  if (!key) {
    throw new Error(
      "apiKey must be provided or ORQ_API_KEY environment variable must be set",
    );
  }
  const apiUrl = options?.apiUrl ?? "https://my.orq.ai";
  _handler = new OrqLangchainCallback(key, apiUrl);
  _registerExitHook();
}

/**
 * Disable automatic tracing and clean up.
 * Flushes any pending traces before closing.
 */
export async function teardown(): Promise<void> {
  if (_handler) {
    await _handler.close();
    _handler = null;
  }
}

/**
 * Get the current global handler, or `null` if `setup()` hasn't been called.
 */
export function getHandler(): OrqLangchainCallback | null {
  return _handler;
}
