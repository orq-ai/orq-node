# ListDeploymentVersionsData

## Example Usage

```typescript
import { ListDeploymentVersionsData } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsData = {
  id: "<id>",
  deploymentId: "<id>",
  variantId: "<id>",
  promptConfig: {
    model: "PT Cruiser",
    modelDbId: "<id>",
    modelType: "image",
    modelParameters: {},
    provider: "openai",
    messages: [
      {
        role: "tool",
        content: "<value>",
      },
    ],
  },
  fallbacks: [
    {
      model: "XC90",
      modelDbId: "<id>",
      modelType: "rerank",
      modelParameters: {},
      provider: "google",
    },
  ],
  tools: [],
  variables: [],
  timestamp: new Date("2024-12-03T00:12:45.677Z"),
  version: "<value>",
  description: "via hastily mutate ick yuck improbable",
  status: "live",
  userId: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The id of the resource                                                                                               |
| `deploymentId`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `variantId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `promptConfig`                                                                                                       | [operations.ListDeploymentVersionsPromptConfig](../../models/operations/listdeploymentversionspromptconfig.md)       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `fallbacks`                                                                                                          | [operations.ListDeploymentVersionsFallbacks](../../models/operations/listdeploymentversionsfallbacks.md)[]           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `tools`                                                                                                              | [operations.ListDeploymentVersionsTools](../../models/operations/listdeploymentversionstools.md)[]                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `variables`                                                                                                          | [operations.Variables](../../models/operations/variables.md)[]                                                       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `notes`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `timestamp`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `retryCount`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `version`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `status`                                                                                                             | [operations.ListDeploymentVersionsStatus](../../models/operations/listdeploymentversionsstatus.md)                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `userId`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `knowledgeBases`                                                                                                     | [operations.ListDeploymentVersionsKnowledgeBases](../../models/operations/listdeploymentversionsknowledgebases.md)[] | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `settings`                                                                                                           | [operations.ListDeploymentVersionsSettings](../../models/operations/listdeploymentversionssettings.md)               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |