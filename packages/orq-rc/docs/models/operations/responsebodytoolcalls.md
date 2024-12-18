# ResponseBodyToolCalls

## Example Usage

```typescript
import { ResponseBodyToolCalls } from "@orq-ai/node/models/operations";

let value: ResponseBodyToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `index`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.UpdatePromptResponseBodyPromptsResponseType](../../models/operations/updatepromptresponsebodypromptsresponsetype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `function`                                                                                                                       | [operations.ResponseBodyFunction](../../models/operations/responsebodyfunction.md)                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |