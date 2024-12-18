# UpdatePromptResponseBodyPromptsToolCalls

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsToolCalls } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `index`                                                                                                                                | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | [operations.UpdatePromptResponseBodyPromptsResponse200Type](../../models/operations/updatepromptresponsebodypromptsresponse200type.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `function`                                                                                                                             | [operations.UpdatePromptResponseBodyPromptsFunction](../../models/operations/updatepromptresponsebodypromptsfunction.md)               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |