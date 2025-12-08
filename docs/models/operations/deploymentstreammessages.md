# DeploymentStreamMessages


## Supported Types

### `operations.DeploymentStreamMessagesSystemMessage`

```typescript
const value: operations.DeploymentStreamMessagesSystemMessage = {
  role: "system",
  content: [],
};
```

### `operations.DeploymentStreamMessagesDeveloperMessage`

```typescript
const value: operations.DeploymentStreamMessagesDeveloperMessage = {
  role: "developer",
  content: [],
};
```

### `operations.DeploymentStreamMessagesUserMessage`

```typescript
const value: operations.DeploymentStreamMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
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
  content: "<value>",
  toolCallId: "<id>",
};
```

