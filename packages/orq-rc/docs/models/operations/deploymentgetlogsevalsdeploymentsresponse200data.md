# DeploymentGetLogsEvalsDeploymentsResponse200Data

## Example Usage

```typescript
import { DeploymentGetLogsEvalsDeploymentsResponse200Data } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsDeploymentsResponse200Data = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "V90",
    modelDbId: "a635baed-de45-468a-b406-4feda58d1c0d",
    modelType: "chat",
    modelParameters: {},
    provider: "groq",
    messages: [
      {
        role: "tool",
        content: "<value>",
      },
    ],
  },
  variables: [
    {
      key: "<key>",
    },
  ],
  promptSnippets: [
    {
      id: "<id>",
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                                                        | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Choices](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200choices.md)[]               | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `action`                                                                                                                                                         | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Action](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200action.md)                   | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `promptConfig`                                                                                                                                                   | [operations.DeploymentGetLogsEvalsDeploymentsResponse200PromptConfig](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200promptconfig.md)       | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `variables`                                                                                                                                                      | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Variables](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200variables.md)[]           | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `performance`                                                                                                                                                    | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Performance](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200performance.md)         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `usage`                                                                                                                                                          | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Usage](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200usage.md)                     | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `billing`                                                                                                                                                        | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Billing](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200billing.md)                 | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `tools`                                                                                                                                                          | [operations.DeploymentGetLogsEvalsDeploymentsResponse200Tools](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200tools.md)[]                   | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `promptSnippets`                                                                                                                                                 | [operations.DeploymentGetLogsEvalsDeploymentsResponse200PromptSnippets](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200promptsnippets.md)[] | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |