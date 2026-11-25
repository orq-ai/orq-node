# DeleteAgentRequest

## Example Usage

```typescript
import { DeleteAgentRequest } from "@orq-ai/node/models/operations";

let value: DeleteAgentRequest = {
  agentKey: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `agentKey`                                                        | *string*                                                          | :heavy_check_mark:                                                | The unique key of the agent to delete                             |
| `force`                                                           | [operations.Force](../../models/operations/force.md)              | :heavy_minus_sign:                                                | Delete even when deployments are active or have runs in progress. |