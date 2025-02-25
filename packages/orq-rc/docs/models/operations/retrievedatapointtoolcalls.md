# RetrieveDatapointToolCalls

## Example Usage

```typescript
import { RetrieveDatapointToolCalls } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointToolCalls = {
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
| `type`                                                                                       | [operations.RetrieveDatapointType](../../models/operations/retrievedatapointtype.md)         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `function`                                                                                   | [operations.RetrieveDatapointFunction](../../models/operations/retrievedatapointfunction.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |