# DeploymentStreamMessageToolCalls

## Example Usage

```typescript
import { DeploymentStreamMessageToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentStreamMessageToolCalls = {
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
| `type`                                                                                                   | [operations.DeploymentStreamMessageType](../../models/operations/deploymentstreammessagetype.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `function`                                                                                               | [operations.DeploymentStreamMessageFunction](../../models/operations/deploymentstreammessagefunction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |