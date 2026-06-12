# GetAllPromptsToolCalls

## Example Usage

```typescript
import { GetAllPromptsToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `index`                                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.GetAllPromptsPromptsResponseType](../../models/operations/getallpromptspromptsresponsetype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `function`                                                                                                 | [operations.GetAllPromptsFunction](../../models/operations/getallpromptsfunction.md)                       | :heavy_check_mark:                                                                                         | N/A                                                                                                        |