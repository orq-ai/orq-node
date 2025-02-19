# GetPromptVersionToolCalls

## Example Usage

```typescript
import { GetPromptVersionToolCalls } from "@orq-ai/node/models/operations";

let value: GetPromptVersionToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `index`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.GetPromptVersionType](../../models/operations/getpromptversiontype.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `function`                                                                                 | [operations.GetPromptVersionFunction](../../models/operations/getpromptversionfunction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |