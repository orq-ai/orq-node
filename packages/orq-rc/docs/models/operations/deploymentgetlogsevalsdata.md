# DeploymentGetLogsEvalsData

## Example Usage

```typescript
import { DeploymentGetLogsEvalsData } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsEvalsData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Silverado",
    modelDbId: "be7b09b6-d748-4eaf-87aa-3b1923f68a7b",
    modelType: "stt",
    modelParameters: {},
    provider: "google",
    messages: [
      {
        role: "expected_output",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                      | [operations.DeploymentGetLogsEvalsChoices](../../models/operations/deploymentgetlogsevalschoices.md)[]         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `action`                                                                                                       | [operations.DeploymentGetLogsEvalsAction](../../models/operations/deploymentgetlogsevalsaction.md)             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `promptConfig`                                                                                                 | [operations.DeploymentGetLogsEvalsPromptConfig](../../models/operations/deploymentgetlogsevalspromptconfig.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variables`                                                                                                    | [operations.EvalsVariables](../../models/operations/evalsvariables.md)[]                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `performance`                                                                                                  | [operations.DeploymentGetLogsEvalsPerformance](../../models/operations/deploymentgetlogsevalsperformance.md)   | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `usage`                                                                                                        | [operations.DeploymentGetLogsEvalsUsage](../../models/operations/deploymentgetlogsevalsusage.md)               | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `billing`                                                                                                      | [operations.EvalsBilling](../../models/operations/evalsbilling.md)                                             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `tools`                                                                                                        | [operations.DeploymentGetLogsEvalsTools](../../models/operations/deploymentgetlogsevalstools.md)[]             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `promptSnippets`                                                                                               | [operations.EvalsPromptSnippets](../../models/operations/evalspromptsnippets.md)[]                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |