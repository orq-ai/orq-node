# DeploymentStreamMessage2

## Example Usage

```typescript
import { DeploymentStreamMessage2 } from "@orq-ai/node/models/operations";

let value: DeploymentStreamMessage2 = {
  role: "prompt",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                 | [operations.DeploymentStreamMessageDeploymentsRole](../../models/operations/deploymentstreammessagedeploymentsrole.md) | :heavy_check_mark:                                                                                                     | The role of the prompt message                                                                                         |
| `content`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |