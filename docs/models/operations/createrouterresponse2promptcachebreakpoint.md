# CreateRouterResponse2PromptCacheBreakpoint

An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.

## Example Usage

```typescript
import { CreateRouterResponse2PromptCacheBreakpoint } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse2PromptCacheBreakpoint = {
  mode: "explicit",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                                                                       | [operations.CreateRouterResponse2ResponsesMode](../../models/operations/createrouterresponse2responsesmode.md)                                               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `ttl`                                                                                                                                                        | [operations.CreateRouterResponse2ResponsesRequestRequestBodyInput2Ttl](../../models/operations/createrouterresponse2responsesrequestrequestbodyinput2ttl.md) | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |