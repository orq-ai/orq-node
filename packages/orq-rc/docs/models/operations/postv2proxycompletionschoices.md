# PostV2ProxyCompletionsChoices

## Example Usage

```typescript
import { PostV2ProxyCompletionsChoices } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsChoices = {
  finishReason: "length",
  index: 9930.48,
  text: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `finishReason`                                                                                                 | [operations.PostV2ProxyCompletionsFinishReason](../../models/operations/postv2proxycompletionsfinishreason.md) | :heavy_check_mark:                                                                                             | The reason the model stopped generating tokens.                                                                |
| `index`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The index of the choice in the list of choices.                                                                |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |