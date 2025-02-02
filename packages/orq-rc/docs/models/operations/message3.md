# Message3

## Example Usage

```typescript
import { Message3 } from "@orq-ai/node/models/operations";

let value: Message3 = {
  role: "assistant",
  url: "https://lumbering-fork.org/",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                 | [operations.DeploymentInvokeMessageDeploymentsRole](../../models/operations/deploymentinvokemessagedeploymentsrole.md) | :heavy_check_mark:                                                                                                     | The role of the prompt message                                                                                         |
| `url`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |