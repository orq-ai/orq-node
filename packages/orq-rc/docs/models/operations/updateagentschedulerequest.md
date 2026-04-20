# UpdateAgentScheduleRequest

## Example Usage

```typescript
import { UpdateAgentScheduleRequest } from "@orq-ai/node/models/operations";

let value: UpdateAgentScheduleRequest = {
  agentKey: "<value>",
  scheduleId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique routing key of the agent the schedule belongs to.                                           |
| `scheduleId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | The schedule's ULID, as returned from create.                                                          |
| `requestBody`                                                                                          | [operations.UpdateAgentScheduleRequestBody](../../models/operations/updateagentschedulerequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |