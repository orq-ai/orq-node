# CreateRouterResponse3ResponsesPromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { CreateRouterResponse3ResponsesPromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse3ResponsesPromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                                                           | [operations.CreateRouterResponse3ResponsesMode](../../models/operations/createrouterresponse3responsesmode.md)                                   | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `ttl`                                                                                                                                            | [operations.CreateRouterResponse3ResponsesRequestRequestBodyTtl](../../models/operations/createrouterresponse3responsesrequestrequestbodyttl.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |