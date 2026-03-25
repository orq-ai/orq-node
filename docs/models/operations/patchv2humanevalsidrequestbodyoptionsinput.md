# PatchV2HumanEvalsIdRequestBodyOptionsInput

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { PatchV2HumanEvalsIdRequestBodyOptionsInput } from "@orq-ai/node/models/operations";

let value: PatchV2HumanEvalsIdRequestBodyOptionsInput = {
  value: "<value>",
  sentiment: "positive",
  description:
    "versus substantiate yellow unfinished before allocation across beside",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The value or content of the feedback.                                                                                                  |
| `sentiment`                                                                                                                            | [operations.PatchV2HumanEvalsIdRequestBodyRequestSentiment](../../models/operations/patchv2humanevalsidrequestbodyrequestsentiment.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `description`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Description of the feedback option.                                                                                                    |
| `icon`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |