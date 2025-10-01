# DeploymentStreamPrefixMessages


## Supported Types

### `operations.PrefixMessagesDeveloperMessage`

```typescript
const value: operations.PrefixMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.PrefixMessagesSystemMessage`

```typescript
const value: operations.PrefixMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.PrefixMessagesUserMessage`

```typescript
const value: operations.PrefixMessagesUserMessage = {
  role: "user",
  content: [],
};
```

### `operations.PrefixMessagesAssistantMessage`

```typescript
const value: operations.PrefixMessagesAssistantMessage = {
  role: "exception",
};
```

### `operations.PrefixMessagesToolMessage`

```typescript
const value: operations.PrefixMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

