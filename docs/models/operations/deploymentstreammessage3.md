# DeploymentStreamMessage3

## Example Usage

```typescript
import { DeploymentStreamMessage3 } from "@orq-ai/node/models/operations";

let value: DeploymentStreamMessage3 = {
  role: "exception",
  url: "https://unhappy-restaurant.info/",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                 | [operations.DeploymentStreamMessageDeploymentsResponseRole](../../models/operations/deploymentstreammessagedeploymentsresponserole.md) | :heavy_check_mark:                                                                                                                     | The role of the prompt message                                                                                                         |
| `url`                                                                                                                                  | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |