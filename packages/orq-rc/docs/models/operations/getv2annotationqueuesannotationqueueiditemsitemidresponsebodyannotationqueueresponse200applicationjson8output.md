# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson8Output

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson8Output,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson8Output =
    {
      id: "<id>",
      model: "Cruze",
      results: [
        {
          flagged: true,
          categories: {
            hate: true,
            hateThreatening: false,
            harassment: true,
            harassmentThreatening: false,
            illicit: false,
            illicitViolent: false,
            selfHarm: true,
            selfHarmIntent: false,
            selfHarmInstructions: false,
            sexual: false,
            sexualMinors: true,
            violence: true,
            violenceGraphic: false,
          },
          categoryScores: {
            hate: 7492.35,
            hateThreatening: 418.83,
            harassment: 9782.18,
            harassmentThreatening: 3978.76,
            illicit: 9821.22,
            illicitViolent: 2259.31,
            selfHarm: 3804.53,
            selfHarmIntent: 1519.77,
            selfHarmInstructions: 1385.52,
            sexual: 5351.69,
            sexualMinors: 3163.58,
            violence: 4212.99,
            violenceGraphic: 6062.32,
          },
        },
      ],
    };
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique identifier for the moderation request  |
| `model`                                           | *string*                                          | :heavy_check_mark:                                | The model used to generate the moderation results |
| `results`                                         | *operations.ResponseBodyResults*[]                | :heavy_check_mark:                                | A list of moderation objects                      |