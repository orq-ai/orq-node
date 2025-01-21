# GetAllPromptsDataPromptsToolCalls

## Example Usage

```typescript
import { GetAllPromptsDataPromptsToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataPromptsToolCalls = {
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
| `type`                                                                                                                     | [operations.GetAllPromptsDataPromptsResponse200Type](../../models/operations/getallpromptsdatapromptsresponse200type.md)   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `function`                                                                                                                 | [operations.GetAllPromptsDataPromptsResponseFunction](../../models/operations/getallpromptsdatapromptsresponsefunction.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |