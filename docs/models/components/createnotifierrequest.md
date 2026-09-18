# CreateNotifierRequest

Create notifier request. `project_id`, `display_name`, and `type` are always required. The destination field required by `type` is captured in `oneOf`.


## Supported Types

### `components.EmailNotifierCreateRequest`

```typescript
const value: components.EmailNotifierCreateRequest = {
  type: "NOTIFIER_TYPE_UNSPECIFIED",
  emails: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  displayName: "Ashton47",
};
```

### `components.SlackWebhookNotifierCreateRequest`

```typescript
const value: components.SlackWebhookNotifierCreateRequest = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  incomingWebhookUrl: "https://judicious-plugin.biz",
  displayName: "Finn_McGlynn88",
};
```

### `components.GenericWebhookNotifierCreateRequest`

```typescript
const value: components.GenericWebhookNotifierCreateRequest = {
  type: "NOTIFIER_TYPE_SLACK_WEBHOOK",
  webhookUrl: "https://squiggly-zen.name/",
  displayName: "Laverne99",
};
```

