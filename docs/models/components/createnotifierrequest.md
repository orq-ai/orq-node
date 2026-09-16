# CreateNotifierRequest

Create notifier request. `project_id`, `display_name`, and `type` are always required. The destination field required by `type` is captured in `oneOf`.


## Supported Types

### `components.EmailNotifierCreateRequest`

```typescript
const value: components.EmailNotifierCreateRequest = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  emails: [],
  displayName: "Deployment alerts",
  incomingWebhookUrl:
    "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
};
```

### `components.SlackWebhookNotifierCreateRequest`

```typescript
const value: components.SlackWebhookNotifierCreateRequest = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  incomingWebhookUrl:
    "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
  displayName: "Deployment alerts",
};
```

### `components.GenericWebhookNotifierCreateRequest`

```typescript
const value: components.GenericWebhookNotifierCreateRequest = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  webhookUrl: "https://discrete-scratch.org",
  displayName: "Deployment alerts",
  incomingWebhookUrl:
    "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
};
```

