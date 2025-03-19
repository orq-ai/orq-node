# CreateDatasetItemDatasetsToolCalls

## Example Usage

```typescript
import { CreateDatasetItemDatasetsToolCalls } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemDatasetsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `index`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [operations.CreateDatasetItemDatasetsType](../../models/operations/createdatasetitemdatasetstype.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `function`                                                                                                   | [operations.CreateDatasetItemDatasetsFunction](../../models/operations/createdatasetitemdatasetsfunction.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |