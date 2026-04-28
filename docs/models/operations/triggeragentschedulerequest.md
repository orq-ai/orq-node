# TriggerAgentScheduleRequest

## Example Usage

```typescript
import { TriggerAgentScheduleRequest } from "@orq-ai/node/models/operations";

let value: TriggerAgentScheduleRequest = {
  agentKey: "<value>",
  scheduleId: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `agentKey`                                                   | *string*                                                     | :heavy_check_mark:                                           | The unique routing key of the agent the schedule belongs to. |
| `scheduleId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The schedule's ULID, as returned from create.                |