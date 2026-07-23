# CreateRouterResponseInput2

An input item. The "type" field determines the item kind: "message", "function_call", "function_call_output", "item_reference", etc.

## Example Usage

```typescript
import { CreateRouterResponseInput2 } from "@orq-ai/node/models/operations";

let value: CreateRouterResponseInput2 = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `arguments`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | The function arguments as a JSON string (for function_call items).                 |
| `callId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | The function call identifier (for function_call and function_call_output items).   |
| `content`                                                                          | *operations.InputContent*                                                          | :heavy_minus_sign:                                                                 | The content of the item: a string or an array of content parts.                    |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the item. For item_reference items, this identifies the referenced item. |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of the function that was called (for function_call items).                |
| `output`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | The output of the function call (for function_call_output type).                   |
| `role`                                                                             | [operations.InputRole](../../models/operations/inputrole.md)                       | :heavy_minus_sign:                                                                 | The role of the message sender (for message items).                                |
| `status`                                                                           | [operations.InputStatus](../../models/operations/inputstatus.md)                   | :heavy_minus_sign:                                                                 | The status of a model-generated input item.                                        |
| `type`                                                                             | [operations.InputType](../../models/operations/inputtype.md)                       | :heavy_minus_sign:                                                                 | The type of item.                                                                  |