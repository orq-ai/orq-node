# CreateChatCompletionTools

## Example Usage

```typescript
import { CreateChatCompletionTools } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionTools = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.CreateChatCompletionType](../../models/operations/createchatcompletiontype.md)         | :heavy_minus_sign:                                                                                 | The type of the tool. Currently, only function is supported.                                       |
| `function`                                                                                         | [operations.CreateChatCompletionFunction](../../models/operations/createchatcompletionfunction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |