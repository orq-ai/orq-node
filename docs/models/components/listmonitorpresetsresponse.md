# ListMonitorPresetsResponse

## Example Usage

```typescript
import { ListMonitorPresetsResponse } from "@orq-ai/node/models/components";

let value: ListMonitorPresetsResponse = {
  object: "<value>",
  data: [
    {
      presetKey: "<value>",
      displayName: "Daphney74",
      description: "irk doorpost pillbox finally",
      kind: "dashboard",
      widgets: [],
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | *string*                                                               | :heavy_check_mark:                                                     | Object discriminator for list responses; always `list`.                |
| `data`                                                                 | [components.MonitorPreset](../../models/components/monitorpreset.md)[] | :heavy_check_mark:                                                     | Built-in presets, dashboards first.                                    |