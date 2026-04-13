/**
 * Orq.ai LangChain integration -- automatic tracing via OTLP spans.
 *
 * Requires `@langchain/core` to be installed separately:
 *   npm install @langchain/core
 */

export { OrqLangchainCallback } from "./handler.mjs";
export { AsyncOrqLangchainCallback } from "./async-handler.mjs";
export { setup, teardown, getHandler } from "./global.mjs";
