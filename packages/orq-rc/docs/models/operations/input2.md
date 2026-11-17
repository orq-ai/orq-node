# Input2

An input item. The "type" field determines the item kind.

## Example Usage

```typescript
import { Input2 } from "@orq-ai/node/models/operations";

let value: Input2 = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `author`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | The path of the agent that sent the message (for agent_message items).       |
| `content`                                                                    | *operations.InputContent*                                                    | :heavy_minus_sign:                                                           | The content of the item: a string or an array of content parts.              |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the item.                                                          |
| `recipient`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The path of the agent the message is addressed to (for agent_message items). |
| `role`                                                                       | [operations.InputRole](../../models/operations/inputrole.md)                 | :heavy_minus_sign:                                                           | The role of the message sender (for message items).                          |
| `type`                                                                       | [operations.InputType](../../models/operations/inputtype.md)                 | :heavy_minus_sign:                                                           | The type of item.                                                            |