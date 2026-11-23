# CreateRouterResponse3PromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { CreateRouterResponse3PromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse3PromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                       | [operations.CreateRouterResponse3Mode](../../models/operations/createrouterresponse3mode.md)                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `ttl`                                                                                                        | [operations.CreateRouterResponse3ResponsesTtl](../../models/operations/createrouterresponse3responsesttl.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |