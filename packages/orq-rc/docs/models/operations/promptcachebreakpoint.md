# PromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { PromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: PromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mode`                                                                                             | [operations.TwoMode](../../models/operations/twomode.md)                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ttl`                                                                                              | [operations.CompactResponse2ResponsesTtl](../../models/operations/compactresponse2responsesttl.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |