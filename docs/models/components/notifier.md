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
  ],
  id: "<id>",
  displayName: "Rhiannon.Huels",
  createdAt: new Date("2024-10-31T01:17:10.561Z"),
  updatedAt: new Date("2026-05-22T09:40:20.879Z"),
};
```

### `components.SlackWebhookNotifier`

```typescript
const value: components.SlackWebhookNotifier = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  incomingWebhookUrl: "https://fussy-precedent.net/",
  id: "<id>",
  displayName: "Ludie.VonRueden6",
  createdAt: new Date("2025-03-09T09:31:19.799Z"),
  updatedAt: new Date("2024-05-31T15:23:14.236Z"),
};
```

### `components.GenericWebhookNotifier`

```typescript
const value: components.GenericWebhookNotifier = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  webhookUrl: "https://stable-heartache.org",
  id: "<id>",
  displayName: "Maxine_Ritchie",
  createdAt: new Date("2026-06-28T03:39:13.726Z"),
  updatedAt: new Date("2025-08-29T23:51:48.411Z"),
};
```

