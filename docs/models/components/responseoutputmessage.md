# ResponseOutputMessage

A message from the model.

## Example Usage

```typescript
import { ResponseOutputMessage } from "@orq-ai/node/models/components";

let value: ResponseOutputMessage = {
  content: [],
  role: "<value>",
  type: "message",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `content`                                                                                                                      | *components.Content*[]                                                                                                         | :heavy_check_mark:                                                                                                             | The content parts of the message.                                                                                              |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The unique ID of the item.                                                                                                     |
| `phase`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The phase of the turn this message belongs to, such as `commentary` or `final_answer`. Present only for models that report it. |
| `role`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The role of the message author. `assistant` for model output.                                                                  |
| `status`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The item status, such as `completed`, `in_progress` or `incomplete`.                                                           |
| `type`                                                                                                                         | [components.ResponseOutputMessageType](../../models/components/responseoutputmessagetype.md)                                   | :heavy_check_mark:                                                                                                             | The item type. Discriminates the item.                                                                                         |
| `additionalProperties`                                                                                                         | Record<string, *any*>                                                                                                          | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |