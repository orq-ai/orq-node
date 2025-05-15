# ListModelsResponseBody

A list of model objects.

## Example Usage

```typescript
import { ListModelsResponseBody } from "@orq-ai/node/models/operations";

let value: ListModelsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      created: 580.37,
      type: "tts",
      ownedBy: "vendor",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | [operations.ListModelsObject](../../models/operations/listmodelsobject.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.ListModelsData](../../models/operations/listmodelsdata.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |