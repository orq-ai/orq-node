# AuditLogSort

A sort expression for audit log queries.

## Example Usage

```typescript
import { AuditLogSort } from "@orq-ai/node/models/components";

let value: AuditLogSort = {
  key: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Audit log field to sort by. Supported keys include _id, created_at, entity_type, entity_id, action, and actor_id. | created_at                                                                                                        |
| `direction`                                                                                                       | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Sort direction. Defaults to desc when omitted or invalid.                                                         | desc                                                                                                              |