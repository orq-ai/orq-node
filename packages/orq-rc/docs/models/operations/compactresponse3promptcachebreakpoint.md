# CompactResponse3PromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { CompactResponse3PromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: CompactResponse3PromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                           | [operations.CompactResponse3Mode](../../models/operations/compactresponse3mode.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `ttl`                                                                                                            | [operations.CompactResponse3ResponsesRequestTtl](../../models/operations/compactresponse3responsesrequestttl.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |