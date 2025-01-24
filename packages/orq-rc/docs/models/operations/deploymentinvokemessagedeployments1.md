# DeploymentInvokeMessageDeployments1

## Example Usage

```typescript
import { DeploymentInvokeMessageDeployments1 } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeMessageDeployments1 = {
  role: "user",
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

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                             | [operations.DeploymentInvokeMessageDeploymentsResponse200TextEventStreamResponseBodyRole](../../models/operations/deploymentinvokemessagedeploymentsresponse200texteventstreamresponsebodyrole.md) | :heavy_check_mark:                                                                                                                                                                                 | The role of the prompt message                                                                                                                                                                     |
| `content`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `toolCalls`                                                                                                                                                                                        | [operations.DeploymentInvokeMessageDeploymentsToolCalls](../../models/operations/deploymentinvokemessagedeploymentstoolcalls.md)[]                                                                 | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |