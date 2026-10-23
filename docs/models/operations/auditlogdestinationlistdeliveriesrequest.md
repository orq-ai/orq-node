# AuditLogDestinationListDeliveriesRequest

## Example Usage

```typescript
import { AuditLogDestinationListDeliveriesRequest } from "@orq-ai/node/models/operations";

let value: AuditLogDestinationListDeliveriesRequest = {
  destinationId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `destinationId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `limit`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `startingAfter`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `endingBefore`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [components.AuditLogDeliveryStatus](../../models/components/auditlogdeliverystatus.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |