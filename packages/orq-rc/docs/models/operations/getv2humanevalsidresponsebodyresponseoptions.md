# GetV2HumanEvalsIdResponseBodyResponseOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { GetV2HumanEvalsIdResponseBodyResponseOptions } from "@orq-ai/node/models/operations";

let value: GetV2HumanEvalsIdResponseBodyResponseOptions = {
  id: "<id>",
  value: "<value>",
  sentiment: "negative",
  description: "unless as underneath legal ridge whereas",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The id of the resource                                                                                                                 |
| `value`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The value or content of the feedback.                                                                                                  |
| `sentiment`                                                                                                                            | [operations.GetV2HumanEvalsIdResponseBodyResponseSentiment](../../models/operations/getv2humanevalsidresponsebodyresponsesentiment.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `description`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Description of the feedback option.                                                                                                    |
| `icon`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |