# DeploymentStreamToolCalls

## Example Usage

```typescript
import { DeploymentStreamToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentStreamToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `index`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.DeploymentStreamType](../../models/operations/deploymentstreamtype.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `function`                                                                                 | [operations.DeploymentStreamFunction](../../models/operations/deploymentstreamfunction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |