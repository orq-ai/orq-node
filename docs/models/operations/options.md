# Options

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { Options } from "@orq-ai/node/models/operations";

let value: Options = {
  value: "<value>",
  sentiment: "neutral",
  description: "construe hm ick though intensely offensively",
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