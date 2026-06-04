# ModelUpdateOpenAILikeRequest

## Example Usage

```typescript
import { ModelUpdateOpenAILikeRequest } from "@orq-ai/node/models/operations";

let value: ModelUpdateOpenAILikeRequest = {
  id: "<id>",
  requestBody: {
    displayName: "Guido.Tremblay61",
    modelType: "<value>",
    region: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the model                                                                                        |
| `requestBody`                                                                                              | [operations.ModelUpdateOpenAILikeRequestBody](../../models/operations/modelupdateopenailikerequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |