# HttpToolInput

Executes HTTP requests to interact with external APIs and web services. Must reference a pre-created HTTP tool by key or id.

## Example Usage

```typescript
import { HttpToolInput } from "@orq-ai/node/models/components";

let value: HttpToolInput = {
  type: "http",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | *"http"*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP tool type                                                                                                               |
| `key`                                                                                                                        | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The key of the pre-created HTTP tool                                                                                         |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The ID of the pre-created HTTP tool                                                                                          |
| `requiresApproval`                                                                                                           | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Whether this tool requires approval before execution                                                                         |
| `timeout`                                                                                                                    | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Tool execution timeout in seconds for this agent (max: 10 minutes). Overrides the timeout configured on the tool definition. |