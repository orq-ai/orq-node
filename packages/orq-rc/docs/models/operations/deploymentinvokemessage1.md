# DeploymentInvokeMessage1

## Example Usage

```typescript
import { DeploymentInvokeMessage1 } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeMessage1 = {
  role: "assistant",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                 | [operations.DeploymentInvokeMessageDeploymentsResponseRole](../../models/operations/deploymentinvokemessagedeploymentsresponserole.md) | :heavy_check_mark:                                                                                                                     | The role of the prompt message                                                                                                         |
| `content`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `toolCalls`                                                                                                                            | [operations.DeploymentInvokeMessageToolCalls](../../models/operations/deploymentinvokemessagetoolcalls.md)[]                           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |