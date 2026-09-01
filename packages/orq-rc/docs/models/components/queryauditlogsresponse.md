# QueryAuditLogsResponse

Paginated audit log query result.

## Example Usage

```typescript
import { QueryAuditLogsResponse } from "@orq-ai/node/models/components";

let value: QueryAuditLogsResponse = {
  auditLogs: [
    {
      auditLogId: "audit_log_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
      projectId: "proj_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
      entityId: "skill_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
      entityType: "ORIGIN_UNSPECIFIED",
      action: "scim",
      actorId: "usr_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
      actorIp: "203.0.113.10",
      createdAt: new Date("2026-06-15T12:30:00Z"),
      metadata: {},
    },
  ],
  overallTotal: "1",
  hasMore: false,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `auditLogs`                                                             | [components.AuditLog](../../models/components/auditlog.md)[]            | :heavy_check_mark:                                                      | Audit logs matching the query.                                          |                                                                         |
| `overallTotal`                                                          | *string*                                                                | :heavy_check_mark:                                                      | Total number of audit logs matching the query before cursor pagination. | 42                                                                      |
| `hasMore`                                                               | *boolean*                                                               | :heavy_check_mark:                                                      | Whether another page exists after the returned audit logs.              | false                                                                   |