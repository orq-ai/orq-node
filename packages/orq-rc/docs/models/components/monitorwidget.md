# MonitorWidget

## Example Usage

```typescript
import { MonitorWidget } from "@orq-ai/node/models/components";

let value: MonitorWidget = {
  widgetId: "<id>",
  type: "toplist",
  title: "<value>",
  queries: [
    {
      metric: "<value>",
    },
  ],
  layout: {
    x: 934756,
    y: 811439,
    w: 235198,
    h: 72918,
  },
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `widgetId`                                                                                                                                                                                 | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | Widget identifier, unique within the monitor. Provide your own or<br/> leave empty to have the server assign one.                                                                          |
| `type`                                                                                                                                                                                     | [components.MonitorWidgetType](../../models/components/monitorwidgettype.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                                         | Widget rendering type.                                                                                                                                                                     |
| `title`                                                                                                                                                                                    | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | Title shown in the widget header.                                                                                                                                                          |
| `queries`                                                                                                                                                                                  | [components.MonitorWidgetQuery](../../models/components/monitorwidgetquery.md)[]                                                                                                           | :heavy_check_mark:                                                                                                                                                                         | Queries feeding the widget. Each maps 1:1 onto a Reporting API<br/> request; the viewer's time range, time zone, and the query mode<br/> derived from the widget type are supplied at render time. |
| `display`                                                                                                                                                                                  | [components.MonitorWidgetDisplay](../../models/components/monitorwidgetdisplay.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                         | Display options such as visualization style and unit.                                                                                                                                      |
| `layout`                                                                                                                                                                                   | [components.MonitorWidgetLayout](../../models/components/monitorwidgetlayout.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                                         | Position and size on the monitor grid.                                                                                                                                                     |