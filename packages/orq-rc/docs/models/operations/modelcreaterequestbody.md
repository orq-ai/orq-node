# ModelCreateRequestBody

## Example Usage

```typescript
import { ModelCreateRequestBody } from "@orq-ai/node/models/operations";

let value: ModelCreateRequestBody = {
  configuration: {
    "key": "<value>",
  },
  displayName: "Birdie_Green",
  hasFunctions: false,
  id: "<id>",
  inputCost: 9446.47,
  metadata: {
    isPrivate: true,
  },
  modelDeveloper: "<value>",
  modelFamily: "<value>",
  modelId: "<id>",
  modelType: "<value>",
  outputCost: 3757.04,
  parameters: [
    {
      config: {
        "key": "<value>",
      },
      name: "<value>",
      parameter: "<value>",
      parameterType: "<value>",
    },
  ],
  provider: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `configuration`                                                                      | Record<string, *any*>                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `displayName`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasFunctions`                                                                       | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `inputCost`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | [components.ModelMetadata](../../models/components/modelmetadata.md)                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `modelDeveloper`                                                                     | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `modelFamily`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `modelId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `modelType`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `outputCost`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `parameters`                                                                         | [components.CreateModelParameter](../../models/components/createmodelparameter.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `provider`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |