# CreateRouterResponseInput2

An input item. The "type" field determines the item kind: "message", "function_call_output", "item_reference", etc.

## Example Usage

```typescript
import { CreateRouterResponseInput2 } from "@orq-ai/node/models/operations";

let value: CreateRouterResponseInput2 = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `callId`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | The ID of the function call being responded to (for function_call_output type). |
| `content`                                                                       | *operations.InputContent*                                                       | :heavy_minus_sign:                                                              | The content of the item: a string or an array of content parts.                 |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | The ID of the item (for item_reference type).                                   |
| `output`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | The output of the function call (for function_call_output type).                |
| `role`                                                                          | [operations.InputRole](../../models/operations/inputrole.md)                    | :heavy_minus_sign:                                                              | The role of the message sender (for message items).                             |
| `type`                                                                          | [operations.InputType](../../models/operations/inputtype.md)                    | :heavy_minus_sign:                                                              | The type of item.                                                               |