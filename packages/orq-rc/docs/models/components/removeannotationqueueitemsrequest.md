# RemoveAnnotationQueueItemsRequest

## Example Usage

```typescript
import { RemoveAnnotationQueueItemsRequest } from "@orq-ai/node/models/components";

let value: RemoveAnnotationQueueItemsRequest = {
  spanIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `spanIds`                                                                    | *string*[]                                                                   | :heavy_check_mark:                                                           | The unique identifiers of the spans to be removed from the annotation queue. |