# Monitor

## Example Usage

```typescript
import { Monitor } from "@orq-ai/node/models/components";

let value: Monitor = {
  monitorId: "<id>",
  displayName: "Felipe94",
  description: "considering unfurl joshingly",
  projectId: "<id>",
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
  presetKey: "<value>",
  createdAt: new Date("2026-05-22T06:12:31.854Z"),
  updatedAt: new Date("2025-12-17T05:29:58.257Z"),
  createdById: "<id>",
  updatedById: "<id>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `monitorId`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Unique monitor identifier assigned by ORQ, for example<br/> `monitor_01H...`. Use this value in retrieve, update, and delete<br/> requests. |
| `displayName`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Workspace-unique display name.                                                                                                      |
| `description`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Short human-readable summary of what the monitor tracks.                                                                            |
| `projectId`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Project that owns the monitor. Empty for workspace-wide monitors (admin-managed). Immutable after creation.                         |
| `widgets`                                                                                                                           | [components.MonitorWidget](../../models/components/monitorwidget.md)[]                                                              | :heavy_check_mark:                                                                                                                  | Widgets rendered on the monitor, each carrying its own query and<br/> layout position.                                              |
| `defaultRange`                                                                                                                      | [components.DefaultRange](../../models/components/defaultrange.md)                                                                  | :heavy_minus_sign:                                                                                                                  | Default relative time range applied when the monitor opens.                                                                         |
| `presetKey`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Preset this monitor was created from. Empty when built from scratch.                                                                |
| `createdAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | Time when the monitor was created.                                                                                                  |
| `updatedAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | Time when the monitor was last updated.                                                                                             |
| `createdById`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | User ID that created the monitor.                                                                                                   |
| `updatedById`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | User ID that last updated the monitor.                                                                                              |