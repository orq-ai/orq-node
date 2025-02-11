# UpdatePromptResponseBodyToolCalls

## Example Usage

```typescript
import { UpdatePromptResponseBodyToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `index`                                                                                                                                                              | *number*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `type`                                                                                                                                                               | [operations.UpdatePromptResponseBodyPromptsResponse200ApplicationJSONType](../../models/operations/updatepromptresponsebodypromptsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `function`                                                                                                                                                           | [operations.UpdatePromptResponseBodyFunction](../../models/operations/updatepromptresponsebodyfunction.md)                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |