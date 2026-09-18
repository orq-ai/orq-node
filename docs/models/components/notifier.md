# Notifier

Notifier resource. The destination field present on the resource depends on `type` and is captured in `oneOf`.


## Supported Types

### `components.EmailNotifier`

```typescript
const value: components.EmailNotifier = {
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

### `components.SlackWebhookNotifier`

```typescript
const value: components.SlackWebhookNotifier = {
  type: "NOTIFIER_TYPE_UNSPECIFIED",
  incomingWebhookUrl: "https://rundown-polyester.name/",
  id: "<id>",
  displayName: "Michele.Hintz",
  createdAt: new Date("2024-05-31T15:23:14.236Z"),
  updatedAt: new Date("2024-12-31T17:53:36.307Z"),
};
```

### `components.GenericWebhookNotifier`

```typescript
const value: components.GenericWebhookNotifier = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  webhookUrl: "https://infamous-soybean.net",
  id: "<id>",
  displayName: "Luz66",
  createdAt: new Date("2025-08-29T23:51:48.411Z"),
  updatedAt: new Date("2024-04-16T04:52:09.184Z"),
};
```

