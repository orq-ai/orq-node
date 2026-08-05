# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson6Response

Details of the LLM response

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson6Response,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson6Response =
    {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `finishReasons`                      | *string*[]                           | :heavy_minus_sign:                   | The reasons for the LLM call failing |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | The ID of the LLM response           |
| `model`                              | *string*                             | :heavy_minus_sign:                   | The model used in the LLM response   |