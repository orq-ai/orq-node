# RunAgentStatus

Task status information

## Example Usage

```typescript
import { RunAgentStatus } from "@orq-ai/node/models/operations";

let value: RunAgentStatus = {
  state: "submitted",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `state`                                                                              | [operations.RunAgentState](../../models/operations/runagentstate.md)                 | :heavy_check_mark:                                                                   | Current task state                                                                   |
| `timestamp`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | ISO timestamp of status update                                                       |
| `message`                                                                            | [operations.RunAgentAgentsMessage](../../models/operations/runagentagentsmessage.md) | :heavy_minus_sign:                                                                   | Optional status message                                                              |