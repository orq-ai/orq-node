# DeploymentGetConfigMessages


## Supported Types

### `operations.DeploymentGetConfigMessagesSystemMessage`

```typescript
const value: operations.DeploymentGetConfigMessagesSystemMessage = {
  role: "system",
  content: [],
};
```

### `operations.DeploymentGetConfigMessagesDeveloperMessage`

```typescript
const value: operations.DeploymentGetConfigMessagesDeveloperMessage = {
  role: "developer",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.DeploymentGetConfigMessagesUserMessage`

```typescript
const value: operations.DeploymentGetConfigMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {},
    },
  ],
};
```

### `operations.DeploymentGetConfigMessagesAssistantMessage`

```typescript
const value: operations.DeploymentGetConfigMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.DeploymentGetConfigMessagesToolMessage`

```typescript
const value: operations.DeploymentGetConfigMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

