# DeploymentStreamPrefixMessages


## Supported Types

### `operations.DeploymentStreamPrefixMessagesSystemMessage`

```typescript
const value: operations.DeploymentStreamPrefixMessagesSystemMessage = {
  role: "system",
  content: [],
};
```

### `operations.DeploymentStreamPrefixMessagesDeveloperMessage`

```typescript
const value: operations.DeploymentStreamPrefixMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.DeploymentStreamPrefixMessagesUserMessage`

```typescript
const value: operations.DeploymentStreamPrefixMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "input_audio",
      inputAudio: {
        data: "<value>",
        format: "mp3",
      },
    },
  ],
};
```

### `operations.DeploymentStreamPrefixMessagesAssistantMessage`

```typescript
const value: operations.DeploymentStreamPrefixMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.DeploymentStreamPrefixMessagesToolMessage`

```typescript
const value: operations.DeploymentStreamPrefixMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

