# AzureFoundryDeploymentMasterData

## Example Usage

```typescript
import { AzureFoundryDeploymentMasterData } from "@orq-ai/node/models/components";

let value: AzureFoundryDeploymentMasterData = {
  hasFunctions: false,
  id: "<id>",
  inputCost: 9495.76,
  modelDeveloper: "<value>",
  modelFamily: "<value>",
  modelId: "<id>",
  modelType: "<value>",
  outputCost: 8864.11,
  parameters: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `hasFunctions`        | *boolean*             | :heavy_check_mark:    | N/A                   |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `inputCost`           | *number*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `modelDeveloper`      | *string*              | :heavy_check_mark:    | N/A                   |
| `modelFamily`         | *string*              | :heavy_check_mark:    | N/A                   |
| `modelId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `modelType`           | *string*              | :heavy_check_mark:    | N/A                   |
| `outputCost`          | *number*              | :heavy_check_mark:    | N/A                   |
| `parameters`          | *any*[]               | :heavy_check_mark:    | N/A                   |