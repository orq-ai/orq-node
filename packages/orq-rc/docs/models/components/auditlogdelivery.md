# AuditLogDelivery

## Example Usage

```typescript
import { AuditLogDelivery } from "@orq-ai/node/models/components";

let value: AuditLogDelivery = {
  id: "<id>",
  destinationId: "<id>",
  eventId: "<id>",
  kind: "AUDIT_LOG_DELIVERY_KIND_EVENT",
  status: "AUDIT_LOG_DELIVERY_STATUS_FAILED",
  attempts: 95293,
  createdAt: new Date("2025-05-29T03:31:50.295Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `destinationId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Audit log entry ID carried in the payload. Replays reuse the original event ID.               |
| `kind`                                                                                        | [components.AuditLogDeliveryKind](../../models/components/auditlogdeliverykind.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.AuditLogDeliveryStatus](../../models/components/auditlogdeliverystatus.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `attempts`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of HTTP attempts made so far.                                                          |
| `nextAttemptAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the next attempt is due, while pending.                                                  |
| `lastAttemptAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastStatusCode`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | HTTP status of the last attempt, 0 when the request never completed.                          |
| `lastError`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Short description of the last failure.                                                        |
| `deliveredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `replayId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Replay request that queued this delivery, empty for live deliveries.                          |