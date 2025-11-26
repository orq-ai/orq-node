# Message3

## Example Usage

```typescript
import { Message3 } from "@orq-ai/node/models/operations";

let value: Message3 = {
  type: "image",
  role: "user",
  url: "https://massive-hunt.biz",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.DeploymentInvokeMessageDeploymentsType](../../models/operations/deploymentinvokemessagedeploymentstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `role`                                                                                                                 | [operations.DeploymentInvokeMessageDeploymentsRole](../../models/operations/deploymentinvokemessagedeploymentsrole.md) | :heavy_check_mark:                                                                                                     | The role of the prompt message                                                                                         |
| `url`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |