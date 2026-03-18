# GetV2HumanEvalsIdResponseBodyOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { GetV2HumanEvalsIdResponseBodyOptions } from "@orq-ai/node/models/operations";

let value: GetV2HumanEvalsIdResponseBodyOptions = {
  id: "<id>",
  value: "<value>",
  sentiment: "positive",
  description: "accidentally soon fold kinase sonar pointless excepting amid",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The id of the resource                                                                                                 |
| `value`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The value or content of the feedback.                                                                                  |
| `sentiment`                                                                                                            | [operations.GetV2HumanEvalsIdResponseBodySentiment](../../models/operations/getv2humanevalsidresponsebodysentiment.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Description of the feedback option.                                                                                    |
| `icon`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |