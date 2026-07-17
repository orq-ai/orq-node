# ListWebhooksResponse

A page of webhooks and the total number of matching records.

## Example Usage

```typescript
import { ListWebhooksResponse } from "@orq-ai/node/models/components";

let value: ListWebhooksResponse = {
  count: 419502,
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
  hasMore: false,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_check_mark:                                                | Total number of webhooks matching the filters, before pagination. |
| `items`                                                           | [components.Webhook](../../models/components/webhook.md)[]        | :heavy_check_mark:                                                | Requested page of webhooks.                                       |
| `hasMore`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | Whether another page of matching webhooks is available.           |