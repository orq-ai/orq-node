# AuditLogDestinationReplayRequest

## Example Usage

```typescript
import { AuditLogDestinationReplayRequest } from "@orq-ai/node/models/operations";

let value: AuditLogDestinationReplayRequest = {
  destinationId: "<id>",
  replayAuditLogDeliveriesRequest: {
    from: new Date("2025-07-31T01:40:18.373Z"),
    to: new Date("2024-11-20T23:23:07.991Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `replayAuditLogDeliveriesRequest`                                                                        | [components.ReplayAuditLogDeliveriesRequest](../../models/components/replayauditlogdeliveriesrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |