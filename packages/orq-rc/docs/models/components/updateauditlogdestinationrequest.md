# UpdateAuditLogDestinationRequest

## Example Usage

```typescript
import { UpdateAuditLogDestinationRequest } from "@orq-ai/node/models/components";

let value: UpdateAuditLogDestinationRequest = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `displayName`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Optional. New destination name.                                                              |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Optional. New description. An empty string clears it.                                        |
| `url`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | Optional. New HTTPS endpoint. Accepted only while the destination is paused.                 |
| `status`                                                                                     | [components.AuditLogDestinationStatus](../../models/components/auditlogdestinationstatus.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |