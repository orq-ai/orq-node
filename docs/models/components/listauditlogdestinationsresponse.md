# ListAuditLogDestinationsResponse

## Example Usage

```typescript
import { ListAuditLogDestinationsResponse } from "@orq-ai/node/models/components";

let value: ListAuditLogDestinationsResponse = {
  object: "<value>",
  data: [
    {
      id: "<id>",
      displayName: "Felipe.Schulist72",
      url: "https://selfish-vein.name/",
      status: "AUDIT_LOG_DESTINATION_STATUS_PAUSED",
      createdAt: new Date("2025-01-18T02:33:34.935Z"),
      updatedAt: new Date("2026-07-28T10:17:55.543Z"),
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [components.AuditLogDestination](../../models/components/auditlogdestination.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |