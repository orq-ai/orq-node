# TestAuditLogDestinationResponse

## Example Usage

```typescript
import { TestAuditLogDestinationResponse } from "@orq-ai/node/models/components";

let value: TestAuditLogDestinationResponse = {
  delivery: {
    id: "<id>",
    destinationId: "<id>",
    eventId: "<id>",
    kind: "AUDIT_LOG_DELIVERY_KIND_TEST",
    status: "AUDIT_LOG_DELIVERY_STATUS_SUCCEEDED",
    attempts: 104774,
    createdAt: new Date("2026-05-27T19:11:02.075Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `delivery`                                                                 | [components.AuditLogDelivery](../../models/components/auditlogdelivery.md) | :heavy_check_mark:                                                         | N/A                                                                        |