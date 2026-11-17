# ThreePromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { ThreePromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: ThreePromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [operations.ThreeMode](../../models/operations/threemode.md)                     | :heavy_check_mark:                                                               | N/A                                                                              |
| `ttl`                                                                            | [operations.CompactResponse3Ttl](../../models/operations/compactresponse3ttl.md) | :heavy_minus_sign:                                                               | N/A                                                                              |