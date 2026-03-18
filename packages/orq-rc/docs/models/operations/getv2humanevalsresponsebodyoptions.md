# GetV2HumanEvalsResponseBodyOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { GetV2HumanEvalsResponseBodyOptions } from "@orq-ai/node/models/operations";

let value: GetV2HumanEvalsResponseBodyOptions = {
  id: "<id>",
  value: "<value>",
  sentiment: "negative",
  description: "if ha so uncover",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The id of the resource                                                                                             |
| `value`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The value or content of the feedback.                                                                              |
| `sentiment`                                                                                                        | [operations.GetV2HumanEvalsResponseBodySentiment](../../models/operations/getv2humanevalsresponsebodysentiment.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Description of the feedback option.                                                                                |
| `icon`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |