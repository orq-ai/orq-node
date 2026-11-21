# CreateRouterResponse2ResponsesPromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { CreateRouterResponse2ResponsesPromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse2ResponsesPromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                                     | [operations.CreateRouterResponse2ResponsesMode](../../models/operations/createrouterresponse2responsesmode.md)                                             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `ttl`                                                                                                                                                      | [operations.CreateRouterResponse2ResponsesRequestRequestBodyInputTtl](../../models/operations/createrouterresponse2responsesrequestrequestbodyinputttl.md) | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |