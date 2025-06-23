# EvalsRagasContextEntitiesRecallRequestBody

## Example Usage

```typescript
import { EvalsRagasContextEntitiesRecallRequestBody } from "@orq-ai/node/models/operations";

let value: EvalsRagasContextEntitiesRecallRequestBody = {
  reference: "<value>",
  model: "Element",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `reference`                                               | *string*                                                  | :heavy_check_mark:                                        | The ground truth answer to evaluate entity recall against |
| `retrievals`                                              | *string*[]                                                | :heavy_minus_sign:                                        | Knowledge base retrievals containing entities to evaluate |
| `model`                                                   | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |