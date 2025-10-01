# ListModelsData

Describes a model offering that can be used with the API

## Example Usage

```typescript
import { ListModelsData } from "@orq-ai/node/models/operations";

let value: ListModelsData = {
  id: "<id>",
  created: 6758.51,
  type: "image",
  ownedBy: "vendor",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The model identifier, which can be referenced in the API endpoints.                                                             |
| `created`                                                                                                                       | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | The timestamp of the model creation                                                                                             |
| `type`                                                                                                                          | [operations.ListModelsType](../../models/operations/listmodelstype.md)                                                          | :heavy_check_mark:                                                                                                              | The modality of the model                                                                                                       |
| `ownedBy`                                                                                                                       | [operations.OwnedBy](../../models/operations/ownedby.md)                                                                        | :heavy_check_mark:                                                                                                              | Describe the provider of the model. Every model with `vendor` is publicly available, while models with `workspace` are private. |