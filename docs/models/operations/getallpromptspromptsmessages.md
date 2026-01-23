# GetAllPromptsPromptsMessages


## Supported Types

### `operations.GetAllPromptsMessagesSystemMessage`

```typescript
const value: operations.GetAllPromptsMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.GetAllPromptsMessagesUserMessage`

```typescript
const value: operations.GetAllPromptsMessagesUserMessage = {
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

### `operations.GetAllPromptsMessagesAssistantMessage`

```typescript
const value: operations.GetAllPromptsMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.GetAllPromptsMessagesToolMessage`

```typescript
const value: operations.GetAllPromptsMessagesToolMessage = {
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

