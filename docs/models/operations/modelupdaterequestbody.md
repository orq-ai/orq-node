# ModelUpdateRequestBody

## Example Usage

```typescript
import { ModelUpdateRequestBody } from "@orq-ai/node/models/operations";

let value: ModelUpdateRequestBody = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `hasFunctions`                                                                       | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `inputCost`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | [components.ModelMetadata](../../models/components/modelmetadata.md)                 | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `modelType`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `outputCost`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `parameters`                                                                         | [components.UpdateModelParameter](../../models/components/updatemodelparameter.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |