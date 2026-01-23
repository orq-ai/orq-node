# Conversation

Conversation context for chat studio integration

## Example Usage

```typescript
import { Conversation } from "@orq-ai/node/models/operations";

let value: Conversation = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Unique ULID identifier for the conversation, prefixed with "conv_". Used to link agent executions to a specific conversation thread. |