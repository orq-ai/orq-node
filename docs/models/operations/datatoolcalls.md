# DataToolCalls

## Example Usage

```typescript
import { DataToolCalls } from "@orq-ai/node/models/operations";

let value: DataToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `index`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.GetAllPromptsDataPromptsResponseType](../../models/operations/getallpromptsdatapromptsresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `function`                                                                                                         | [operations.DataFunction](../../models/operations/datafunction.md)                                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |