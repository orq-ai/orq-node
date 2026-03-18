# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesDeveloperMessage

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesDeveloperMessage } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesDeveloperMessage = {
    role: "developer",
    content: [],
  };
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | *"developer"*                                                                                                                | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case  `developer`.                                                                  |
| `content`                                                                                                                    | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdMessagesAnnotationQueueContent*                                 | :heavy_check_mark:                                                                                                           | The contents of the developer message.                                                                                       |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |