# PostV2ProxyCompletionsProxyChoices

## Example Usage

```typescript
import { PostV2ProxyCompletionsProxyChoices } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsProxyChoices = {
  finishReason: "content_filter",
  index: 4909.79,
  text: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `finishReason`                                                                                                           | [operations.PostV2ProxyCompletionsProxyFinishReason](../../models/operations/postv2proxycompletionsproxyfinishreason.md) | :heavy_check_mark:                                                                                                       | The reason the model stopped generating tokens.                                                                          |
| `index`                                                                                                                  | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The index of the choice in the list of choices.                                                                          |
| `text`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |