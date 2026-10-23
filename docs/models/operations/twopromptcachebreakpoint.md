# TwoPromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { TwoPromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: TwoPromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                                                           | [operations.CreateRouterResponse2Mode](../../models/operations/createrouterresponse2mode.md)                                                     | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `ttl`                                                                                                                                            | [operations.CreateRouterResponse2ResponsesRequestRequestBodyTtl](../../models/operations/createrouterresponse2responsesrequestrequestbodyttl.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |