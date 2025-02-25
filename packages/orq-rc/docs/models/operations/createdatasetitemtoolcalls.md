# CreateDatasetItemToolCalls

## Example Usage

```typescript
import { CreateDatasetItemToolCalls } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `index`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [operations.CreateDatasetItemType](../../models/operations/createdatasetitemtype.md)         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `function`                                                                                   | [operations.CreateDatasetItemFunction](../../models/operations/createdatasetitemfunction.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |