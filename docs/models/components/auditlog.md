# AuditLog

An audit log entry for an entity event in the authenticated workspace.

## Example Usage

```typescript
import { AuditLog } from "@orq-ai/node/models/components";

let value: AuditLog = {
  auditLogId: "audit_log_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
  projectId: "proj_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
  entityId: "skill_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
  entityType: "api",
  action: "ORIGIN_UNSPECIFIED",
  actorId: "usr_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
  actorIp: "203.0.113.10",
  actorDisplay: "kevin@orq.ai",
  requestId: "req_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY",
  createdAt: new Date("2026-06-15T12:30:00Z"),
  metadata: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `auditLogId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the audit log entry.                                                    | audit_log_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY                                                          |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Project associated with the event, when the audited entity belongs to a project.              | proj_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY                                                               |
| `entityId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the entity that changed.                                                        | skill_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY                                                              |
| `entityType`                                                                                  | [components.Value](../../models/components/value.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `action`                                                                                      | [components.Value](../../models/components/value.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `actorId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | User or system actor that caused the event, when available.                                   | usr_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY                                                                |
| `actorIp`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | IP address observed for the actor, when available.                                            | 203.0.113.10                                                                                  |
| `actorType`                                                                                   | [components.Value](../../models/components/value.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `actorDisplay`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human readable actor name captured when the action happened.                                  | kevin@orq.ai                                                                                  |
| `origin`                                                                                      | [components.Value](../../models/components/value.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Correlates the entry with the originating request.                                            | req_01JZ9QMB6AEH7B8XH0ZQ9ZPQEY                                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time when the audit log entry was created.                                                    | 2026-06-15T12:30:00Z                                                                          |
| `metadata`                                                                                    | [components.AuditLogMetadata](../../models/components/auditlogmetadata.md)                    | :heavy_minus_sign:                                                                            | Additional event metadata. The exact shape depends on entity_type and action.                 | {<br/>"display_name": "Production skill"<br/>}                                                |