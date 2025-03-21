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
  content: [
    {
      type: "input_audio",
      inputAudio: {
        data: "<value>",
        format: "wav",
      },
    },
  ],
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
  content: "<value>",
  toolCallId: "<id>",
};
```

