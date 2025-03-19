# ChoicesToolCalls

## Example Usage

```typescript
import { ChoicesToolCalls } from "@orq-ai/node/models/operations";

let value: ChoicesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The ID of the tool call.                                                 |
| `type`                                                                   | [operations.ChoicesType](../../models/operations/choicestype.md)         | :heavy_check_mark:                                                       | The type of the tool. Currently, only `function` is supported.           |
| `function`                                                               | [operations.ChoicesFunction](../../models/operations/choicesfunction.md) | :heavy_check_mark:                                                       | N/A                                                                      |