# UpdateDatapointDatasetsToolCalls

## Example Usage

```typescript
import { UpdateDatapointDatasetsToolCalls } from "@orq-ai/node/models/operations";

let value: UpdateDatapointDatasetsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `index`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.UpdateDatapointDatasetsType](../../models/operations/updatedatapointdatasetstype.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `function`                                                                                               | [operations.UpdateDatapointDatasetsFunction](../../models/operations/updatedatapointdatasetsfunction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |