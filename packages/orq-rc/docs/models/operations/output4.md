# Output4

A function tool call output

## Example Usage

```typescript
import { Output4 } from "@orq-ai/node/models/operations";

let value: Output4 = {
  id: "<id>",
  type: "function_call",
  callId: "<id>",
  name: "<value>",
  arguments: "<value>",
  status: "completed",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The unique identifier for this output item                                                                                                   |
| `type`                                                                                                                                       | *"function_call"*                                                                                                                            | :heavy_check_mark:                                                                                                                           | The type of output item                                                                                                                      |
| `callId`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The ID of the function call                                                                                                                  |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The name of the function being called                                                                                                        |
| `arguments`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The arguments to the function as a JSON string                                                                                               |
| `status`                                                                                                                                     | [operations.CreateResponseOutputRouterResponsesResponseStatus](../../models/operations/createresponseoutputrouterresponsesresponsestatus.md) | :heavy_check_mark:                                                                                                                           | The status of the function call                                                                                                              |