# BulkCreateDatapointsDatasetsToolCalls

## Example Usage

```typescript
import { BulkCreateDatapointsDatasetsToolCalls } from "@orq-ai/node/models/operations";

let value: BulkCreateDatapointsDatasetsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `index`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.BulkCreateDatapointsDatasetsType](../../models/operations/bulkcreatedatapointsdatasetstype.md)         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `function`                                                                                                         | [operations.BulkCreateDatapointsDatasetsFunction](../../models/operations/bulkcreatedatapointsdatasetsfunction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |