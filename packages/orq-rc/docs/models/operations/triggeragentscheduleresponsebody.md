# TriggerAgentScheduleResponseBody

Execution scheduled for immediate delivery.

## Example Usage

```typescript
import { TriggerAgentScheduleResponseBody } from "@orq-ai/node/models/operations";

let value: TriggerAgentScheduleResponseBody = {
  scheduleId: "<id>",
  status: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `scheduleId`                   | *string*                       | :heavy_check_mark:             | N/A                            |
| `status`                       | *string*                       | :heavy_check_mark:             | Always "triggered" on success. |