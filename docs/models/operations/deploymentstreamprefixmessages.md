# DeploymentStreamPrefixMessages


## Supported Types

### `operations.PrefixMessagesSystemMessage`

```typescript
const value: operations.PrefixMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.PrefixMessagesDeveloperMessage`

```typescript
const value: operations.PrefixMessagesDeveloperMessage = {
  role: "developer",
  content: [],
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
  role: "assistant",
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

