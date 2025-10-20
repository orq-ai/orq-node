# CreatePromptPromptsMessages


## Supported Types

### `operations.CreatePromptMessagesSystemMessage`

```typescript
const value: operations.CreatePromptMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.CreatePromptMessagesUserMessage`

```typescript
const value: operations.CreatePromptMessagesUserMessage = {
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

### `operations.CreatePromptMessagesAssistantMessage`

```typescript
const value: operations.CreatePromptMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.CreatePromptMessagesToolMessage`

```typescript
const value: operations.CreatePromptMessagesToolMessage = {
  role: "tool",
  content: [
    "<value 1>",
    "<value 2>",
  ],
  toolCallId: "<id>",
};
```

