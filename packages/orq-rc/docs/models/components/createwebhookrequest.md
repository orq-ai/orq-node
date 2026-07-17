# CreateWebhookRequest

Configuration used to create a webhook in the current workspace.

## Example Usage

```typescript
import { CreateWebhookRequest } from "@orq-ai/node/models/components";

let value: CreateWebhookRequest = {
  id: "<id>",
  url: "https://passionate-season.net",
  contentType: "application/json",
  displayName: "Anjali18",
  events: [
    "<value 1>",
    "<value 2>",
  ],
  secret: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Client-generated webhook ID.                                                                                   |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | HTTPS endpoint that receives webhook deliveries.                                                               |
| `contentType`                                                                                                  | [components.CreateWebhookRequestContentType](../../models/components/createwebhookrequestcontenttype.md)       | :heavy_check_mark:                                                                                             | Content type sent with webhook deliveries.                                                                     |
| `displayName`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Human-readable webhook name.                                                                                   |
| `events`                                                                                                       | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | One or more workspace event slugs that trigger a delivery, for example `deployment.invoked` or `llm.response`. |
| `secret`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Signing secret returned by `GET /v2/webhooks/secret`.                                                          |
| `enabled`                                                                                                      | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Whether webhook deliveries are enabled.                                                                        |