# InvokeAgentRequest

## Example Usage

```typescript
import { InvokeAgentRequest } from "@orq-ai/node/models/operations";

let value: InvokeAgentRequest = {
  key: "<key>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | The key or ID of the agent to invoke                                                   |
| `requestBody`                                                                          | [operations.InvokeAgentRequestBody](../../models/operations/invokeagentrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |