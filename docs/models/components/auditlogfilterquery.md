# AuditLogFilterQuery

Search and advanced filters for querying audit logs.

## Example Usage

```typescript
import { AuditLogFilterQuery } from "@orq-ai/node/models/components";

let value: AuditLogFilterQuery = {
  search: "Production skill",
  operator: "and",
  filters: [
    {
      type: "string",
      path: "entity_type",
      operator: "is",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `search`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Optional text search applied to supported display fields.                | Production skill                                                         |
| `operator`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Logical operator used to combine filters.                                | and                                                                      |
| `filters`                                                                | [components.AuditLogFilter](../../models/components/auditlogfilter.md)[] | :heavy_check_mark:                                                       | Advanced filters applied to the query.                                   |                                                                          |