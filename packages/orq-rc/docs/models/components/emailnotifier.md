# EmailNotifier

`emails` is present for email notifiers.

## Example Usage

```typescript
import { EmailNotifier } from "@orq-ai/node/models/components";

let value: EmailNotifier = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  emails: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "<id>",
  displayName: "Juvenal.Dare46",
  createdAt: new Date("2026-05-22T09:40:20.879Z"),
  updatedAt: new Date("2024-03-22T14:14:08.246Z"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.NotifierType](../../models/components/notifiertype.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `emails`                                                                                                             | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | Email addresses notified when `type` is `NOTIFIER_TYPE_EMAIL`.                                                       |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique notifier identifier assigned by ORQ.                                                                          |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Project that contains the notifier. Empty for workspace-wide notifiers.                                              |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Human-readable notifier name.                                                                                        |
| `createdAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Time when the notifier was created.                                                                                  |
| `updatedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Time when the notifier was last updated.                                                                             |
| `createdById`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | User ID that created the notifier.                                                                                   |
| `updatedById`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | User ID that last updated the notifier.                                                                              |
| `metadata`                                                                                                           | [components.NotifierMetadata](../../models/components/notifiermetadata.md)                                           | :heavy_minus_sign:                                                                                                   | Custom JSON metadata stored with the notifier.                                                                       |
| `incomingWebhookUrl`                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Slack incoming webhook URL used when `type` is `NOTIFIER_TYPE_SLACK_WEBHOOK`.                                        |
| `webhookUrl`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Generic webhook URL used when `type` is `NOTIFIER_TYPE_WEBHOOK`.                                                     |
| `headers`                                                                                                            | [components.Notifier1Headers](../../models/components/notifier1headers.md)                                           | :heavy_minus_sign:                                                                                                   | Optional HTTP headers for generic webhooks. Each entry may be a string value or an object with `secret` and `value`. |