# CreateMonitorRequest

## Example Usage

```typescript
import { CreateMonitorRequest } from "@orq-ai/node/models/components";

let value: CreateMonitorRequest = {
  displayName: "Julio_Ryan",
  widgets: [
    {
      widgetId: "<id>",
      type: "timeseries",
      title: "<value>",
      queries: [],
      layout: {
        x: 934756,
        y: 811439,
        w: 235198,
        h: 72918,
      },
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Workspace-unique display name.                                                                         |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Short human-readable summary of what the monitor tracks.                                               |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Project that should own the monitor. Omit to create a<br/> workspace-wide monitor (requires admin access). |
| `widgets`                                                                                              | [components.MonitorWidget](../../models/components/monitorwidget.md)[]                                 | :heavy_check_mark:                                                                                     | Widgets to render on the monitor.                                                                      |
| `defaultRange`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Default relative time range applied when the monitor opens.                                            |
| `presetKey`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Preset the monitor is created from, stamped for provenance.                                            |