# BulkCreateDatapointsToolCalls

## Example Usage

```typescript
import { BulkCreateDatapointsToolCalls } from "@orq-ai/node/models/operations";

let value: BulkCreateDatapointsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `index`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.BulkCreateDatapointsType](../../models/operations/bulkcreatedatapointstype.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `function`                                                                                         | [operations.BulkCreateDatapointsFunction](../../models/operations/bulkcreatedatapointsfunction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |