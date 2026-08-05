# RemoveAnnotationQueueItemsRequestBody

## Example Usage

```typescript
import { RemoveAnnotationQueueItemsRequestBody } from "@orq-ai/node/models/operations";

let value: RemoveAnnotationQueueItemsRequestBody = {
  spanIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `spanIds`                                                                   | *string*[]                                                                  | :heavy_check_mark:                                                          | The unique identifiers of the spans to be removed from the annotation queue |