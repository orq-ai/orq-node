# ItemsToolCalls

## Example Usage

```typescript
import { ItemsToolCalls } from "@orq-ai/node/models/operations";

let value: ItemsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `index`                                                                                                                                              | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `type`                                                                                                                                               | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponseType](../../models/operations/getallprompttemplatesitemsprompttemplatesresponsetype.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `function`                                                                                                                                           | [operations.ItemsFunction](../../models/operations/itemsfunction.md)                                                                                 | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |