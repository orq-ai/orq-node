# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueDeveloperMessage

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueDeveloperMessage,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueDeveloperMessage =
    {
      role: "developer",
      content: "<value>",
    };
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                              | *"developer"*                                                                                                                       | :heavy_check_mark:                                                                                                                  | The role of the messages author, in this case  `developer`.                                                                         |
| `content`                                                                                                                           | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueResponse200ApplicationJSONResponseBody2Content* | :heavy_check_mark:                                                                                                                  | The contents of the developer message.                                                                                              |
| `name`                                                                                                                              | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | An optional name for the participant. Provides the model information to differentiate between participants of the same role.        |