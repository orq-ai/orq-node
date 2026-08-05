# ExtraParams

## Example Usage

```typescript
import { ExtraParams } from "@orq-ai/node/models/operations";

let value: ExtraParams = {
  product: "playgrounds",
  relatedEntities: [],
  projectId: "<id>",
  fallbacks: [
    {
      stream: true,
      model: "Land Cruiser",
      modelDbId: "<id>",
      modelType: "completion",
      modelParameters: {},
      provider: "nvidia",
      messages: [
        {
          role: "expected_output",
          content: [],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `product`                                                                                                                                                                                                                            | [operations.ResponseBodyProduct](../../models/operations/responsebodyproduct.md)                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                   | The product to use for generation                                                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                                                                                    | *operations.RelatedEntities*[]                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                  |
| `projectId`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                   | The project id of the workspace                                                                                                                                                                                                      |
| `fallbacks`                                                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson22Fallbacks](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson22fallbacks.md)[] | :heavy_minus_sign:                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                  |
| `variantInfo`                                                                                                                                                                                                                        | [operations.VariantInfo](../../models/operations/variantinfo.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                  |