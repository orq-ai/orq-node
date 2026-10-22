# UpdateAuditLogDestinationResponse

## Example Usage

```typescript
import { UpdateAuditLogDestinationResponse } from "@orq-ai/node/models/components";

let value: UpdateAuditLogDestinationResponse = {
  destination: {
    id: "<id>",
    displayName: "Kailey_Becker-Parisian76",
    url: "https://putrid-parade.name",
    status: "AUDIT_LOG_DESTINATION_STATUS_ACTIVE",
    createdAt: new Date("2026-02-06T07:00:11.584Z"),
    updatedAt: new Date("2026-11-06T09:13:07.564Z"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `destination`                                                                    | [components.AuditLogDestination](../../models/components/auditlogdestination.md) | :heavy_check_mark:                                                               | N/A                                                                              |