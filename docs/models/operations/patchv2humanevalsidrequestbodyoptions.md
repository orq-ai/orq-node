# PatchV2HumanEvalsIdRequestBodyOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { PatchV2HumanEvalsIdRequestBodyOptions } from "@orq-ai/node/models/operations";

let value: PatchV2HumanEvalsIdRequestBodyOptions = {
  value: "<value>",
  sentiment: "neutral",
  description:
    "boohoo pointed noteworthy notwithstanding whoever programme statue",
  icon: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The value or content of the feedback.                                                                                    |
| `sentiment`                                                                                                              | [operations.PatchV2HumanEvalsIdRequestBodySentiment](../../models/operations/patchv2humanevalsidrequestbodysentiment.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Description of the feedback option.                                                                                      |
| `icon`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |