# RetrieveAnnotationQueueItemResponseBodyResponse

Details of the LLM response

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyResponse } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyResponse = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `finishReasons`                      | *string*[]                           | :heavy_minus_sign:                   | The reasons for the LLM call failing |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | The ID of the LLM response           |
| `model`                              | *string*                             | :heavy_minus_sign:                   | The model used in the LLM response   |