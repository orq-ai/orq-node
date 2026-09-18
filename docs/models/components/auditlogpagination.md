# AuditLogPagination

Cursor pagination settings for audit log queries.

## Example Usage

```typescript
import { AuditLogPagination } from "@orq-ai/node/models/components";

let value: AuditLogPagination = {
  limit: 20,
  startingAfter: "audit_log_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
  endingBefore: "audit_log_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Maximum number of audit logs to return. Defaults to 50 when omitted.            | 20                                                                              |
| `startingAfter`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | Cursor for the next page. Use the last audit_log_id from the previous page.     | audit_log_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY                                            |
| `endingBefore`                                                                  | *string*                                                                        | :heavy_minus_sign:                                                              | Cursor for the previous page. Use the first audit_log_id from the current page. | audit_log_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY                                            |