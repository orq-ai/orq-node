# ThreeText

A text content part.

## Example Usage

```typescript
import { ThreeText } from "@orq-ai/node/models/operations";

let value: ThreeText = {
  text: "<value>",
  type: "input_text",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cacheControl`                                                                                          | [operations.ThreeCacheControl](../../models/operations/threecachecontrol.md)                            | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `promptCacheBreakpoint`                                                                                 | [operations.ThreePromptCacheBreakpoint](../../models/operations/threepromptcachebreakpoint.md)          | :heavy_minus_sign:                                                                                      | An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl. |
| `text`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | The text content.                                                                                       |
| `type`                                                                                                  | *"input_text"*                                                                                          | :heavy_check_mark:                                                                                      | N/A                                                                                                     |