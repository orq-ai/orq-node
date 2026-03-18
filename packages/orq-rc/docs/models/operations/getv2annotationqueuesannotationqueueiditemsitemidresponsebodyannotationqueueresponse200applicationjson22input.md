# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson22Input

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson22Input,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson22Input =
    {
      inputs: {},
      promptConfig: {
        stream: false,
        model: "A4",
        modelDbId: "23b9f7d2-00b3-4ce5-8bf9-0cb832d1aaa2",
        modelType: "chat",
        modelParameters: {},
        provider: "anthropic",
        messages: [],
      },
      extraParams: {
        product: "experiments",
        relatedEntities: [],
        projectId: "<id>",
        fallbacks: [
          {
            stream: true,
            model: "Land Cruiser",
            modelDbId: "35bb17ae-dba0-4eee-a99f-2ea79f449752",
            modelType: "ocr",
            modelParameters: {},
            provider: "orq",
            messages: [],
          },
        ],
      },
      workspaceId: "4ec6c0de-b043-4eb9-9ba1-a022ae639f13",
    };
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inputs`                                                                                                                                                                                                                       | Record<string, *operations.ResponseBodyInputs*>                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `promptConfig`                                                                                                                                                                                                                 | [operations.ResponseBodyPromptConfig](../../models/operations/responsebodypromptconfig.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `tools`                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseTools](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponsetools.md)[] | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `knowledgeBases`                                                                                                                                                                                                               | [operations.ResponseBodyKnowledgeBases](../../models/operations/responsebodyknowledgebases.md)[]                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `extraParams`                                                                                                                                                                                                                  | [operations.ExtraParams](../../models/operations/extraparams.md)                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `workspaceId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | The id of the resource                                                                                                                                                                                                         |
| `engine`                                                                                                                                                                                                                       | [operations.Engine](../../models/operations/engine.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |