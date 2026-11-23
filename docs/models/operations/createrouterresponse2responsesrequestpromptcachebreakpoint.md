# CreateRouterResponse2ResponsesRequestPromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { CreateRouterResponse2ResponsesRequestPromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse2ResponsesRequestPromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                                                     | [operations.CreateRouterResponse2ResponsesRequestMode](../../models/operations/createrouterresponse2responsesrequestmode.md)                                               | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `ttl`                                                                                                                                                                      | [operations.CreateRouterResponse2ResponsesRequestRequestBodyInput2ContentTtl](../../models/operations/createrouterresponse2responsesrequestrequestbodyinput2contentttl.md) | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |