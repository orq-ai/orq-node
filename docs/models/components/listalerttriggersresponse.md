# ListAlertTriggersResponse

## Example Usage

```typescript
import { ListAlertTriggersResponse } from "@orq-ai/node/models/components";

let value: ListAlertTriggersResponse = {
  object: "<value>",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Object discriminator for list responses; always `list`.                    |
| `data`                                                                     | [components.AlertTrigger](../../models/components/alerttrigger.md)[]       | :heavy_check_mark:                                                         | Page of triggers, ordered newest first.                                    |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether more triggers are available in the selected pagination<br/> direction. |