# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Input

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Input,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Input =
    {
      originalModel: "<value>",
      config: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
        ],
      },
    };
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `originalModel`     | *string*            | :heavy_check_mark:  | N/A                 |
| `config`            | *operations.Config* | :heavy_check_mark:  | N/A                 |