# ListMonitorsResponse

## Example Usage

```typescript
import { ListMonitorsResponse } from "@orq-ai/node/models/components";

let value: ListMonitorsResponse = {
  object: "<value>",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Object discriminator for list responses; always `list`.                    |
| `data`                                                                     | [components.Monitor](../../models/components/monitor.md)[]                 | :heavy_check_mark:                                                         | Page of monitors, ordered newest first.                                    |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether more monitors are available in the selected pagination<br/> direction. |