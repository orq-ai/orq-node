# PostV2HumanEvalsResponseBodyOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { PostV2HumanEvalsResponseBodyOptions } from "@orq-ai/node/models/operations";

let value: PostV2HumanEvalsResponseBodyOptions = {
  id: "<id>",
  value: "<value>",
  sentiment: "positive",
  description: "reorient hasty except even which till sonar scorpion",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The id of the resource                                                                                               |
| `value`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The value or content of the feedback.                                                                                |
| `sentiment`                                                                                                          | [operations.PostV2HumanEvalsResponseBodySentiment](../../models/operations/postv2humanevalsresponsebodysentiment.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Description of the feedback option.                                                                                  |
| `icon`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |