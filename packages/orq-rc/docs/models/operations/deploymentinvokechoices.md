# DeploymentInvokeChoices

## Example Usage

```typescript
import { DeploymentInvokeChoices } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeChoices = {
  index: 8633.28,
  message: {
    type: "tool_calls",
    role: "tool",
    toolCalls: [
      {
        type: "function",
        function: {
          name: "<value>",
          arguments: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `index`                              | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `message`                            | *operations.DeploymentInvokeMessage* | :heavy_check_mark:                   | N/A                                  |
| `finishReason`                       | *string*                             | :heavy_minus_sign:                   | N/A                                  |