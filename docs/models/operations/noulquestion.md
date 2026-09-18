# NoulQuestion

Answers with a probability between 0 and 1 that the statement holds.

## Example Usage

```typescript
import { NoulQuestion } from "@orq-ai/node/models/operations";

let value: NoulQuestion = {
  instructions: {
    "0": "<value 1>",
  },
  type: "noul",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `criteria`                                                                | [operations.Criteria](../../models/operations/criteria.md)                | :heavy_minus_sign:                                                        | Optional descriptions of what true and false mean.                        |
| `instructions`                                                            | *operations.Instructions*                                                 | :heavy_check_mark:                                                        | The evaluation prompt for this question. A string, an object or an array. |
| `type`                                                                    | *"noul"*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |