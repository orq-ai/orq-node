# GetOnePromptPromptsMessages


## Supported Types

### `operations.GetOnePromptMessagesSystemMessage`

```typescript
const value: operations.GetOnePromptMessagesSystemMessage = {
  role: "system",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.GetOnePromptMessagesUserMessage`

```typescript
const value: operations.GetOnePromptMessagesUserMessage = {
  role: "user",
  content: "<value>",
};
```

### `operations.GetOnePromptMessagesAssistantMessage`

```typescript
const value: operations.GetOnePromptMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.GetOnePromptMessagesToolMessage`

```typescript
const value: operations.GetOnePromptMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

