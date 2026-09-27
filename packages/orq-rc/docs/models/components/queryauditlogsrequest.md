# QueryAuditLogsRequest

Request body for querying audit logs in the authenticated workspace.

## Example Usage

```typescript
import { QueryAuditLogsRequest } from "@orq-ai/node/models/components";

let value: QueryAuditLogsRequest = {
  filters: {
    operator: "and",
    filters: [
      {
        type: "string",
        path: "entity_type",
        operator: "is",
        value: "skill",
      },
    ],
  },
  pagination: {
    limit: 20,
  },
  sorting: [
    {
      key: "created_at",
      direction: "desc",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `filters`                                                                        | [components.AuditLogFilterQuery](../../models/components/auditlogfilterquery.md) | :heavy_check_mark:                                                               | Search and advanced filters for querying audit logs.                             |
| `pagination`                                                                     | [components.AuditLogPagination](../../models/components/auditlogpagination.md)   | :heavy_check_mark:                                                               | Cursor pagination settings for audit log queries.                                |
| `sorting`                                                                        | [components.AuditLogSort](../../models/components/auditlogsort.md)[]             | :heavy_minus_sign:                                                               | Sort expressions. Defaults to audit_log_id descending when omitted.              |