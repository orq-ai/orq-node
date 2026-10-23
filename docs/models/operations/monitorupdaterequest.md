# MonitorUpdateRequest

## Example Usage

```typescript
import { MonitorUpdateRequest } from "@orq-ai/node/models/operations";

let value: MonitorUpdateRequest = {
  monitorId: "<id>",
  updateMonitorRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `monitorId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Monitor ID to update.                                                              |
| `updateMonitorRequest`                                                             | [components.UpdateMonitorRequest](../../models/components/updatemonitorrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |