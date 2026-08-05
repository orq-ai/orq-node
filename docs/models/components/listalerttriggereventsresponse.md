# ListAlertTriggerEventsResponse

## Example Usage

```typescript
import { ListAlertTriggerEventsResponse } from "@orq-ai/node/models/components";

let value: ListAlertTriggerEventsResponse = {
  object: "<value>",
  data: [
    {
      eventId: "<id>",
      triggerId: "<id>",
      alertId: "<id>",
      at: new Date("2024-01-28T14:38:47.401Z"),
      value: 3652.25,
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | Object discriminator for list responses; always `list`.                        |
| `data`                                                                         | [components.AlertTriggerEvent](../../models/components/alerttriggerevent.md)[] | :heavy_check_mark:                                                             | Page of events, ordered newest first.                                          |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether more events are available in the selected pagination<br/> direction.   |