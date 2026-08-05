# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson22Input

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson22Input,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson22Input =
    {
      inputs: {},
      promptConfig: {
        stream: true,
        model: "Colorado",
        modelDbId: "798fb58b-d01e-45e0-b035-41086079f946",
        modelType: "chat",
        modelParameters: {},
        provider: "moonshotai",
        messages: [],
      },
      extraParams: {
        product: "remoteconfigs",
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
      workspaceId: "030cf172-0f2a-4b48-ae70-3b28fb84729b",
    };
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inputs`                                                                                                                                                                             | Record<string, *operations.ResponseBodyInputs*>                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `promptConfig`                                                                                                                                                                       | [operations.ResponseBodyPromptConfig](../../models/operations/responsebodypromptconfig.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `tools`                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseTools](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponsetools.md)[] | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `knowledgeBases`                                                                                                                                                                     | [operations.ResponseBodyKnowledgeBases](../../models/operations/responsebodyknowledgebases.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `extraParams`                                                                                                                                                                        | [operations.ExtraParams](../../models/operations/extraparams.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `workspaceId`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The id of the resource                                                                                                                                                               |
| `engine`                                                                                                                                                                             | [operations.ResponseBodyEngine](../../models/operations/responsebodyengine.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |