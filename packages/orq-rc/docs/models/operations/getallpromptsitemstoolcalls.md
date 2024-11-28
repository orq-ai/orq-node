# GetAllPromptsItemsToolCalls

## Example Usage

```typescript
import { GetAllPromptsItemsToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItemsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `index`                                                                                                                    | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | [operations.GetAllPromptsItemsPromptsResponse200Type](../../models/operations/getallpromptsitemspromptsresponse200type.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `function`                                                                                                                 | [operations.GetAllPromptsItemsFunction](../../models/operations/getallpromptsitemsfunction.md)                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |