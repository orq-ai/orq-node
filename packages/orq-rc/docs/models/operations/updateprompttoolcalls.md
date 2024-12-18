# UpdatePromptToolCalls

## Example Usage

```typescript
import { UpdatePromptToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `index`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [operations.UpdatePromptType](../../models/operations/updateprompttype.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `function`                                                                         | [operations.UpdatePromptFunction](../../models/operations/updatepromptfunction.md) | :heavy_check_mark:                                                                 | N/A                                                                                |