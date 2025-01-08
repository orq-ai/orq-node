# GetAllPromptsDataPromptsResponseToolCalls

## Example Usage

```typescript
import { GetAllPromptsDataPromptsResponseToolCalls } from "@orq-ai/node/models/operations";

let value: GetAllPromptsDataPromptsResponseToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `index`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `type`                                                                                                                                                                         | [operations.GetAllPromptsDataPromptsResponse200ApplicationJSONResponseBodyType](../../models/operations/getallpromptsdatapromptsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `function`                                                                                                                                                                     | [operations.GetAllPromptsDataPromptsResponseFunction](../../models/operations/getallpromptsdatapromptsresponsefunction.md)                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |