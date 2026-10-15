# TelemetryListCapabilitiesRequest

## Example Usage

```typescript
import { TelemetryListCapabilitiesRequest } from "@orq-ai/node/models/operations";

let value: TelemetryListCapabilitiesRequest = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                              | [components.TelemetrySource](../../models/components/telemetrysource.md)                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `projectId`                                                                                                                           | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Restricts discovered runtime metrics to records attributed to this exact<br/> project. Projectless workspace metrics are excluded.    |
| `workspaceWide`                                                                                                                       | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Discovers runtime metrics across the complete workspace, including<br/> project-attributed and projectless records. Workspace-admin only. |