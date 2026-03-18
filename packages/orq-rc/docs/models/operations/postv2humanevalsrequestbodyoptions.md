# PostV2HumanEvalsRequestBodyOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { PostV2HumanEvalsRequestBodyOptions } from "@orq-ai/node/models/operations";

let value: PostV2HumanEvalsRequestBodyOptions = {
  value: "<value>",
  sentiment: "negative",
  description: "as ouch boohoo",
  icon: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | The value or content of the feedback.                        |
| `sentiment`                                                  | [operations.Sentiment](../../models/operations/sentiment.md) | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | Description of the feedback option.                          |
| `icon`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |