# CompactResponse2PromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { CompactResponse2PromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: CompactResponse2PromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                                           | [operations.CompactResponse2ResponsesMode](../../models/operations/compactresponse2responsesmode.md)                                                             | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `ttl`                                                                                                                                                            | [operations.CompactResponse2ResponsesRequestRequestBodyInput2ContentTtl](../../models/operations/compactresponse2responsesrequestrequestbodyinput2contentttl.md) | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |