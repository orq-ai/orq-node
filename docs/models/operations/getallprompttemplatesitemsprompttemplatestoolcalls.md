# GetAllPromptTemplatesItemsPromptTemplatesToolCalls

## Example Usage

```typescript
import { GetAllPromptTemplatesItemsPromptTemplatesToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesItemsPromptTemplatesToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                       | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `index`                                                                                                                                                    | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `type`                                                                                                                                                     | [operations.GetAllPromptTemplatesItemsPromptTemplatesResponse200Type](../../models/operations/getallprompttemplatesitemsprompttemplatesresponse200type.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `function`                                                                                                                                                 | [operations.GetAllPromptTemplatesItemsPromptTemplatesFunction](../../models/operations/getallprompttemplatesitemsprompttemplatesfunction.md)               | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |