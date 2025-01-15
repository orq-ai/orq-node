# UpdatePromptResponseBodyPromptsResponseToolCalls

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsResponseToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptsResponseToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `index`                                                                                                                                                                | *number*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `type`                                                                                                                                                                 | [operations.UpdatePromptResponseBodyPromptsResponse200ApplicationJson2Type](../../models/operations/updatepromptresponsebodypromptsresponse200applicationjson2type.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `function`                                                                                                                                                             | [operations.UpdatePromptResponseBodyPromptsResponseFunction](../../models/operations/updatepromptresponsebodypromptsresponsefunction.md)                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |