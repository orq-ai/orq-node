# DeploymentInvokeMessage2

## Example Usage

```typescript
import { DeploymentInvokeMessage2 } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeMessage2 = {
  role: "prompt",
  content: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `role`                                                                                           | [operations.DeploymentInvokeMessageRole](../../models/operations/deploymentinvokemessagerole.md) | :heavy_check_mark:                                                                               | The role of the prompt message                                                                   |
| `content`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |