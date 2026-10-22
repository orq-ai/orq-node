# ListAuditLogDeliveriesResponse

## Example Usage

```typescript
import { ListAuditLogDeliveriesResponse } from "@orq-ai/node/models/components";

let value: ListAuditLogDeliveriesResponse = {
  object: "<value>",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [components.AuditLogDelivery](../../models/components/auditlogdelivery.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |