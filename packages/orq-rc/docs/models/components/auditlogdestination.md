# AuditLogDestination

## Example Usage

```typescript
import { AuditLogDestination } from "@orq-ai/node/models/components";

let value: AuditLogDestination = {
  id: "<id>",
  displayName: "Maxine_Jerde89",
  url: "https://mixed-adaptation.net/",
  status: "AUDIT_LOG_DESTINATION_STATUS_PAUSED",
  createdAt: new Date("2024-08-20T04:17:53.135Z"),
  updatedAt: new Date("2025-01-15T12:42:09.929Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable destination name, unique within the workspace.                                 |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional description of the receiving system.                                                 |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTPS endpoint that receives signed audit log events.                                         |
| `status`                                                                                      | [components.AuditLogDestinationStatus](../../models/components/auditlogdestinationstatus.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `signingSecretHint`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Last four characters of the current signing secret, to tell rotations apart.                  |
| `secretRotatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Time the current signing secret was issued.                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |