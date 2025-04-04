# DeploymentStreamMessages


## Supported Types

### `operations.DeploymentStreamMessagesDeveloperMessage`

```typescript
const value: operations.DeploymentStreamMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.DeploymentStreamMessagesSystemMessage`

```typescript
const value: operations.DeploymentStreamMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.DeploymentStreamMessagesUserMessage`

```typescript
const value: operations.DeploymentStreamMessagesUserMessage = {
  role: "user",
  content: "<value>",
};
```

### `operations.DeploymentStreamMessagesAssistantMessage`

```typescript
const value: operations.DeploymentStreamMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.DeploymentStreamMessagesToolMessage`

```typescript
const value: operations.DeploymentStreamMessagesToolMessage = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

