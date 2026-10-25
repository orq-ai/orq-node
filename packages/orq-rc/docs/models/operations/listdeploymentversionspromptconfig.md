# ListDeploymentVersionsPromptConfig

## Example Usage

```typescript
import { ListDeploymentVersionsPromptConfig } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsPromptConfig = {
  model: "LeBaron",
  modelDbId: "<id>",
  modelType: "moderation",
  modelParameters: {},
  provider: "hcompany",
  messages: [
    {
      role: "tool",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `modelDbId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `modelType`                                                                                                          | [operations.ListDeploymentVersionsModelType](../../models/operations/listdeploymentversionsmodeltype.md)             | :heavy_check_mark:                                                                                                   | The modality of the model                                                                                            |
| `modelParameters`                                                                                                    | [operations.ListDeploymentVersionsModelParameters](../../models/operations/listdeploymentversionsmodelparameters.md) | :heavy_check_mark:                                                                                                   | Model Parameters: Not all parameters apply to every model                                                            |
| `provider`                                                                                                           | [operations.ListDeploymentVersionsProvider](../../models/operations/listdeploymentversionsprovider.md)               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `messages`                                                                                                           | [operations.ListDeploymentVersionsMessages](../../models/operations/listdeploymentversionsmessages.md)[]             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `integrationId`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The ID of the integration to use                                                                                     |
| `version`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |