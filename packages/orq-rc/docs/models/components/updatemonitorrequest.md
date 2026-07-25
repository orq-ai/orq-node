# UpdateMonitorRequest

## Example Usage

```typescript
import { UpdateMonitorRequest } from "@orq-ai/node/models/components";

let value: UpdateMonitorRequest = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | New workspace-unique display name. Omit to keep the current name.                                                |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | New description. Omit to keep the current description.                                                           |
| `widgets`                                                                                                        | [components.MonitorWidget](../../models/components/monitorwidget.md)[]                                           | :heavy_minus_sign:                                                                                               | Replacement widget set. A non-empty array replaces all widgets;<br/> omit or send empty to keep the current widgets. |
| `defaultRange`                                                                                                   | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | New default relative time range. Omit to keep the current value.                                                 |