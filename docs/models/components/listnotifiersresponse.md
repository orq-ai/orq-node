# ListNotifiersResponse

## Example Usage

```typescript
import { ListNotifiersResponse } from "@orq-ai/node/models/components";

let value: ListNotifiersResponse = {
  object: "<value>",
  data: [
    {
      type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
      emails: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      id: "<id>",
      displayName: "Brooks_Mann7",
      createdAt: new Date("2024-02-11T08:34:44.680Z"),
      updatedAt: new Date("2026-06-17T09:30:43.013Z"),
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Object discriminator for list responses; always `list`.                    |
| `data`                                                                     | *components.Notifier*[]                                                    | :heavy_check_mark:                                                         | Page of notifiers.                                                         |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether more notifiers are available in the selected pagination direction. |