# AuditLogFilter

A single advanced filter applied to audit logs.

## Example Usage

```typescript
import { AuditLogFilter } from "@orq-ai/node/models/components";

let value: AuditLogFilter = {
  type: "string",
  path: "entity_type",
  operator: "is",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Filter value type, such as string, date, number, boolean, or array.                                                                          | string                                                                                                                                       |
| `path`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Audit log field path to filter on. Supported paths include created_at, entity_id, entity_type, action, actor_id, and metadata.display_name.  | entity_type                                                                                                                                  |
| `operator`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Filter operator supported by the selected field type.                                                                                        | is                                                                                                                                           |
| `value`                                                                                                                                      | *any*                                                                                                                                        | :heavy_check_mark:                                                                                                                           | Represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. |                                                                                                                                              |