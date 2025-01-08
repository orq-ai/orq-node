# GetAllPromptsDataToolCalls

## Example Usage

```typescript
import { GetAllPromptsDataToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `index`                                                                                                                                                | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `type`                                                                                                                                                 | [operations.GetAllPromptsDataPromptsResponse200ApplicationJSONType](../../models/operations/getallpromptsdatapromptsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `function`                                                                                                                                             | [operations.GetAllPromptsDataFunction](../../models/operations/getallpromptsdatafunction.md)                                                           | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |