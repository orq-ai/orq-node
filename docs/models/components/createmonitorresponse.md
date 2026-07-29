# CreateMonitorResponse

## Example Usage

```typescript
import { CreateMonitorResponse } from "@orq-ai/node/models/components";

let value: CreateMonitorResponse = {
  monitor: {
    monitorId: "<id>",
    displayName: "Tiara48",
    description: "mobility supplier satirise beside bludgeon",
    projectId: "<id>",
    widgets: [],
    presetKey: "<value>",
    createdAt: new Date("2024-06-22T15:59:00.054Z"),
    updatedAt: new Date("2025-05-10T20:19:37.582Z"),
    createdById: "<id>",
    updatedById: "<id>",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `monitor`                                                | [components.Monitor](../../models/components/monitor.md) | :heavy_check_mark:                                       | Newly created monitor.                                   |