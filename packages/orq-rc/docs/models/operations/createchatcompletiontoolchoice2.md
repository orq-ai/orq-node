# CreateChatCompletionToolChoice2

## Example Usage

```typescript
import { CreateChatCompletionToolChoice2 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.CreateChatCompletionToolChoiceType](../../models/operations/createchatcompletiontoolchoicetype.md)         | :heavy_minus_sign:                                                                                                     | The type of the tool. Currently, only function is supported.                                                           |
| `function`                                                                                                             | [operations.CreateChatCompletionToolChoiceFunction](../../models/operations/createchatcompletiontoolchoicefunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |