# RetrieveAnnotationQueueItemResponseBodyChoices

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyChoices } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyChoices = {
  finishReason: "content_filter",
  index: 6366.41,
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `finishReason`                                                                                                                                   | [operations.RetrieveAnnotationQueueItemResponseBodyFinishReason](../../models/operations/retrieveannotationqueueitemresponsebodyfinishreason.md) | :heavy_check_mark:                                                                                                                               | The reason the model stopped generating tokens.                                                                                                  |
| `index`                                                                                                                                          | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The index of the choice in the list of choices.                                                                                                  |
| `text`                                                                                                                                           | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |