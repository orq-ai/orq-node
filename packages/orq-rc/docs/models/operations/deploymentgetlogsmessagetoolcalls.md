# DeploymentGetLogsMessageToolCalls

## Example Usage

```typescript
import { DeploymentGetLogsMessageToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `index`                                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.DeploymentGetLogsMessageType](../../models/operations/deploymentgetlogsmessagetype.md)         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `function`                                                                                                 | [operations.DeploymentGetLogsMessageFunction](../../models/operations/deploymentgetlogsmessagefunction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |