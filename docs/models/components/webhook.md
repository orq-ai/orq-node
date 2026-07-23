# Webhook

A webhook subscription and its delivery configuration. Responses include the signing secret; treat it as sensitive.

## Example Usage

```typescript
import { Webhook } from "@orq-ai/node/models/components";

let value: Webhook = {
  id: "<id>",
  url: "https://sad-outlaw.org",
  contentType: "application/x-www-form-urlencoded",
  displayName: "Kennith_Pacocha",
  events: [
    "<value 1>",
  ],
  secret: "<value>",
  createdById: "<id>",
  updatedById: "<id>",
  created: new Date("2025-06-10T17:44:49.987Z"),
  updated: new Date("2026-10-09T23:01:39.726Z"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique webhook ID.                                                                                 |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | HTTPS endpoint that receives webhook deliveries.                                                   |
| `contentType`                                                                                      | [components.ContentType](../../models/components/contenttype.md)                                   | :heavy_check_mark:                                                                                 | Content type sent with webhook deliveries.                                                         |
| `displayName`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | Human-readable webhook name.                                                                       |
| `events`                                                                                           | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Workspace event slugs that trigger a delivery, for example `deployment.invoked` or `llm.response`. |
| `secret`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | Signing secret used to verify webhook delivery signatures. Treat this value as sensitive.          |
| `enabled`                                                                                          | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether webhook deliveries are enabled.                                                            |
| `failureCount`                                                                                     | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Server-managed number of consecutive delivery failures.                                            |
| `createdById`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | Account ID that created the webhook.                                                               |
| `updatedById`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | Account ID that most recently updated the webhook.                                                 |
| `created`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation time in RFC 3339 format.                                                                  |
| `updated`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Most recent update time in RFC 3339 format.                                                        |