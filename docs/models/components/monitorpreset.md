# MonitorPreset

## Example Usage

```typescript
import { MonitorPreset } from "@orq-ai/node/models/components";

let value: MonitorPreset = {
  presetKey: "<value>",
  displayName: "Luther_Bailey",
  description: "cycle below whether blah whereas",
  kind: "widget",
  widgets: [],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `presetKey`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Stable identifier for the preset, e.g. `genai-overview` or<br/> `widget-cost-by-model`.         |
| `displayName`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | Human-readable preset name shown in galleries.                                                  |
| `description`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | What the preset shows and when to use it.                                                       |
| `kind`                                                                                          | [components.MonitorPresetKind](../../models/components/monitorpresetkind.md)                    | :heavy_check_mark:                                                                              | Preset kind.                                                                                    |
| `widgets`                                                                                       | [components.MonitorWidget](../../models/components/monitorwidget.md)[]                          | :heavy_check_mark:                                                                              | Widgets the preset materializes into a create request. Widget<br/> presets carry exactly one entry. |
| `defaultRange`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | Default relative time range suggested by the preset.                                            |