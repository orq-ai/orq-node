# DeploymentGetConfigTools

## Example Usage

```typescript
import { DeploymentGetConfigTools } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigTools = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.DeploymentGetConfigDeploymentsType](../../models/operations/deploymentgetconfigdeploymentstype.md) | :heavy_check_mark:                                                                                             | The type of the tool. Currently, only `function` is supported.                                                 |
| `function`                                                                                                     | [operations.DeploymentGetConfigFunction](../../models/operations/deploymentgetconfigfunction.md)               | :heavy_check_mark:                                                                                             | N/A                                                                                                            |