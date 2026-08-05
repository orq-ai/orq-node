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
        modelDbId: "<id>",
        modelType: "tts",
        modelParameters: {},
        provider: "minimax",
        messages: [
          {
            role: "expected_output",
            content: "<value>",
          },
        ],
      },
      extraParams: {
        product: "workflows",
        relatedEntities: [
          {
            type: "spreadsheet_sheet_row_cell",
            cellId: "<id>",
          },
        ],
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
      },
      workspaceId: "<id>",
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
| `workspaceId`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `engine`                                                                                                                                                                             | [operations.ResponseBodyEngine](../../models/operations/responsebodyengine.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |