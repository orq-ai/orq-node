# PostV2HumanEvalsResponseBodyResponseOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { PostV2HumanEvalsResponseBodyResponseOptions } from "@orq-ai/node/models/operations";

let value: PostV2HumanEvalsResponseBodyResponseOptions = {
  id: "<id>",
  value: "<value>",
  sentiment: "negative",
  description: "phooey robust keenly help repurpose inside meh seriously",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The id of the resource                                                                                                               |
| `value`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The value or content of the feedback.                                                                                                |
| `sentiment`                                                                                                                          | [operations.PostV2HumanEvalsResponseBodyResponseSentiment](../../models/operations/postv2humanevalsresponsebodyresponsesentiment.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Description of the feedback option.                                                                                                  |
| `icon`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |