# CreateMonitorRequest

## Example Usage

```typescript
import { CreateMonitorRequest } from "@orq-ai/node/models/components";

let value: CreateMonitorRequest = {
  displayName: "Julio_Ryan",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Workspace-unique display name.                                                                         |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Short human-readable summary of what the monitor tracks.                                               |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Project that should own the monitor. Omit to create a<br/> workspace-wide monitor (requires admin access). |
| `widgets`                                                                                              | [components.MonitorWidget](../../models/components/monitorwidget.md)[]                                 | :heavy_minus_sign:                                                                                     | Widgets to render on the monitor. Empty creates a valid blank monitor.                                 |
| `defaultRange`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Default relative time range applied when the monitor opens.                                            |
| `presetKey`                                                                                            | [components.PresetKey](../../models/components/presetkey.md)                                           | :heavy_minus_sign:                                                                                     | Known preset used to create the monitor. Empty when built from scratch.                                |