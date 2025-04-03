# Message2

## Example Usage

```typescript
import { Message2 } from "@orq-ai/node/models/operations";

let value: Message2 = {
  type: "content",
  role: "tool",
  content: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.DeploymentInvokeMessageType](../../models/operations/deploymentinvokemessagetype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `role`                                                                                           | [operations.DeploymentInvokeMessageRole](../../models/operations/deploymentinvokemessagerole.md) | :heavy_check_mark:                                                                               | The role of the prompt message                                                                   |
| `content`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |