# RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyAnd

And

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyAnd,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyAnd =
    {
      and: [
        {
          "key": {
            exists: true,
          },
        },
        {
          "key": {
            exists: true,
          },
        },
        {
          "key": {
            exists: true,
          },
        },
      ],
    };
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `and`                                                                                 | Record<string, *operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesAnd*>[] | :heavy_check_mark:                                                                    | N/A                                                                                   |