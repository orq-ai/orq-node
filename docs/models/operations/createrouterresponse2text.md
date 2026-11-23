# CreateRouterResponse2Text

A text content part.

## Example Usage

```typescript
import { CreateRouterResponse2Text } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse2Text = {
  text: "<value>",
  type: "input_text",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `cacheControl`                                                                                                                 | [operations.CreateRouterResponse2CacheControl](../../models/operations/createrouterresponse2cachecontrol.md)                   | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `promptCacheBreakpoint`                                                                                                        | [operations.CreateRouterResponse2PromptCacheBreakpoint](../../models/operations/createrouterresponse2promptcachebreakpoint.md) | :heavy_minus_sign:                                                                                                             | An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.                        |
| `text`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The text content.                                                                                                              |
| `type`                                                                                                                         | *"input_text"*                                                                                                                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |