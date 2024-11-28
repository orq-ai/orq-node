# CreatePromptToolCalls

## Example Usage

```typescript
import { CreatePromptToolCalls } from "@orq-ai/node/models/operations";

let value: CreatePromptToolCalls = {
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
| `type`                                                                             | [operations.CreatePromptType](../../models/operations/createprompttype.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `function`                                                                         | [operations.CreatePromptFunction](../../models/operations/createpromptfunction.md) | :heavy_check_mark:                                                                 | N/A                                                                                |