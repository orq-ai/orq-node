# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse2002

A refusal content part from the model

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemContentAnnotationQueuesResponse2002 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemContentAnnotationQueuesResponse2002 = {
  type: "refusal",
  refusal: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *"refusal"*              | :heavy_check_mark:       | The type of content part |
| `refusal`                | *string*                 | :heavy_check_mark:       | The refusal message      |