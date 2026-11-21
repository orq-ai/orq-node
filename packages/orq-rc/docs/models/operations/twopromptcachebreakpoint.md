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
| `mode`                                                                                                                                           | [operations.CompactResponse2Mode](../../models/operations/compactresponse2mode.md)                                                               | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `ttl`                                                                                                                                            | [operations.CompactResponse2ResponsesRequestRequestBodyInputTtl](../../models/operations/compactresponse2responsesrequestrequestbodyinputttl.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |