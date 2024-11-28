# UpdatePromptResponseBodyPromptsResponse200ToolCalls

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsResponse200ToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptsResponse200ToolCalls = {
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
| `type`                                                                                                                                                                 | [operations.UpdatePromptResponseBodyPromptsResponse200ApplicationJson1Type](../../models/operations/updatepromptresponsebodypromptsresponse200applicationjson1type.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `function`                                                                                                                                                             | [operations.UpdatePromptResponseBodyPromptsResponse200Function](../../models/operations/updatepromptresponsebodypromptsresponse200function.md)                         | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |