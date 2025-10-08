# StreamAgentRequest

## Example Usage

```typescript
import { StreamAgentRequest } from "@orq-ai/node/models/operations";

let value: StreamAgentRequest = {
  key: "<key>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | The key or ID of the agent to invoke                                                   |
| `requestBody`                                                                          | [operations.StreamAgentRequestBody](../../models/operations/streamagentrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |