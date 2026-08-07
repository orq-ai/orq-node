# CreateAgentScheduleRequest

## Example Usage

```typescript
import { CreateAgentScheduleRequest } from "@orq-ai/node/models/operations";

let value: CreateAgentScheduleRequest = {
  agentKey: "<value>",
  requestBody: {
    displayName: "Penelope.Lebsack3",
    expression: "<value>",
    payload: {},
    type: "cron",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique routing key of the agent the schedule belongs to.                                           |
| `requestBody`                                                                                          | [operations.CreateAgentScheduleRequestBody](../../models/operations/createagentschedulerequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |