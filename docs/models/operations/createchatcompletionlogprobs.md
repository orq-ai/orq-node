# CreateChatCompletionLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { CreateChatCompletionLogprobs } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionLogprobs = {
  content: [],
  refusal: null,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                      | [operations.CreateChatCompletionRouterContent](../../models/operations/createchatcompletionroutercontent.md)[] | :heavy_check_mark:                                                                                             | A list of message content tokens with log probability information.                                             |
| `refusal`                                                                                                      | [operations.CreateChatCompletionRefusal](../../models/operations/createchatcompletionrefusal.md)[]             | :heavy_check_mark:                                                                                             | A list of message refusal tokens with log probability information.                                             |