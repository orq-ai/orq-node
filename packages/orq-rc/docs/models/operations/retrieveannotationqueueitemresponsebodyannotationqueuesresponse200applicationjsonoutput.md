# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONOutput

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONOutput,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONOutput =
    {
      id: "<id>",
      model: "Aventador",
      results: [
        {
          categories: {
            sexual: false,
            hateAndDiscrimination: true,
            violenceAndThreats: false,
            dangerousAndCriminalContent: false,
            selfharm: false,
            health: true,
            financial: true,
            law: true,
            pii: true,
          },
          categoryScores: {
            sexual: 1768.25,
            hateAndDiscrimination: 9933.18,
            violenceAndThreats: 9773.72,
            dangerousAndCriminalContent: 2534.91,
            selfharm: 9268.11,
            health: 9018.97,
            financial: 1536.66,
            law: 5322.7,
            pii: 1923.25,
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