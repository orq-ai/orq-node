# CreatePromptMessages


## Supported Types

### `operations.CreatePromptMessagesSystemMessage`

```typescript
const value: operations.CreatePromptMessagesSystemMessage = {
  role: "system",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.CreatePromptMessagesUserMessage`

```typescript
const value: operations.CreatePromptMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {},
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
    {
      type: "text",
      text: "<value>",
    },
  ],
  toolCallId: "<id>",
};
```

