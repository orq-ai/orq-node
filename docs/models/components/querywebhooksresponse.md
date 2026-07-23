# QueryWebhooksResponse

## Example Usage

```typescript
import { QueryWebhooksResponse } from "@orq-ai/node/models/components";

let value: QueryWebhooksResponse = {
  count: 687128,
  items: [
    {
      id: "<id>",
      url: "https://superior-creature.net/",
      contentType: "application/json",
      displayName: "Madalyn_Cassin",
      events: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      secret: "<value>",
      createdById: "<id>",
      updatedById: "<id>",
      created: new Date("2025-04-26T18:28:24.773Z"),
      updated: new Date("2025-06-23T23:48:40.284Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `items`                                                    | [components.Webhook](../../models/components/webhook.md)[] | :heavy_check_mark:                                         | N/A                                                        |