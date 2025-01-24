# EvalsData

## Example Usage

```typescript
import { EvalsData } from "@orq-ai/node/models/operations";

let value: EvalsData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Durango",
    modelDbId: "136a9e56-41f1-479b-8486-116000cee0a4",
    modelType: "chat",
    modelParameters: {},
    provider: "openai",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                            | [operations.EvalsChoices](../../models/operations/evalschoices.md)[]                                                 | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `action`                                                                                                             | [operations.EvalsAction](../../models/operations/evalsaction.md)                                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `promptConfig`                                                                                                       | [operations.EvalsPromptConfig](../../models/operations/evalspromptconfig.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `variables`                                                                                                          | [operations.DeploymentGetLogsEvalsVariables](../../models/operations/deploymentgetlogsevalsvariables.md)[]           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `performance`                                                                                                        | [operations.EvalsPerformance](../../models/operations/evalsperformance.md)                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `usage`                                                                                                              | [operations.EvalsUsage](../../models/operations/evalsusage.md)                                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `billing`                                                                                                            | [operations.DeploymentGetLogsEvalsBilling](../../models/operations/deploymentgetlogsevalsbilling.md)                 | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `tools`                                                                                                              | [operations.EvalsTools](../../models/operations/evalstools.md)[]                                                     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `promptSnippets`                                                                                                     | [operations.DeploymentGetLogsEvalsPromptSnippets](../../models/operations/deploymentgetlogsevalspromptsnippets.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |