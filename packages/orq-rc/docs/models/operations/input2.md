# Input2

An input item. The "type" field determines the item kind.

## Example Usage

```typescript
import { Input2 } from "@orq-ai/node/models/operations";

let value: Input2 = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `content`                                                    | *string*                                                     | :heavy_minus_sign:                                           | The content of the item.                                     |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | The ID of the item.                                          |
| `role`                                                       | [operations.InputRole](../../models/operations/inputrole.md) | :heavy_minus_sign:                                           | The role of the message sender (for message items).          |
| `type`                                                       | [operations.InputType](../../models/operations/inputtype.md) | :heavy_minus_sign:                                           | The type of item.                                            |