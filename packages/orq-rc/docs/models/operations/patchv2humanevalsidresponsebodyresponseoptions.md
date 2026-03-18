# PatchV2HumanEvalsIdResponseBodyResponseOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { PatchV2HumanEvalsIdResponseBodyResponseOptions } from "@orq-ai/node/models/operations";

let value: PatchV2HumanEvalsIdResponseBodyResponseOptions = {
  id: "<id>",
  value: "<value>",
  sentiment: "positive",
  description:
    "until frantically amidst amid moist behind glisten categorise against",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The id of the resource                                                                                                                     |
| `value`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The value or content of the feedback.                                                                                                      |
| `sentiment`                                                                                                                                | [operations.PatchV2HumanEvalsIdResponseBodyResponseSentiment](../../models/operations/patchv2humanevalsidresponsebodyresponsesentiment.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Description of the feedback option.                                                                                                        |
| `icon`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |