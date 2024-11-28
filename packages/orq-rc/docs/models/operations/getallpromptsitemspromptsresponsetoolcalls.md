# GetAllPromptsItemsPromptsResponseToolCalls

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsResponseToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptsItemsPromptsResponseToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `index`                                                                                                                                                  | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `type`                                                                                                                                                   | [operations.GetAllPromptsItemsPromptsResponse200ApplicationJSONType](../../models/operations/getallpromptsitemspromptsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `function`                                                                                                                                               | [operations.GetAllPromptsItemsPromptsResponseFunction](../../models/operations/getallpromptsitemspromptsresponsefunction.md)                             | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |