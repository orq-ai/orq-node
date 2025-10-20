# UpdatePromptPromptsMessages


## Supported Types

### `operations.UpdatePromptMessagesSystemMessage`

```typescript
const value: operations.UpdatePromptMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.UpdatePromptMessagesUserMessage`

```typescript
const value: operations.UpdatePromptMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {
        fileData: "<value>",
        filename: "example.file",
      },
    },
  ],
};
```

### `operations.UpdatePromptMessagesAssistantMessage`

```typescript
const value: operations.UpdatePromptMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.UpdatePromptMessagesToolMessage`

```typescript
const value: operations.UpdatePromptMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

