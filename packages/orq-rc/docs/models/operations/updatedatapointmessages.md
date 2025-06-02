# UpdateDatapointMessages


## Supported Types

### `operations.UpdateDatapointMessagesDeveloperMessage`

```typescript
const value: operations.UpdateDatapointMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.UpdateDatapointMessagesSystemMessage`

```typescript
const value: operations.UpdateDatapointMessagesSystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.UpdateDatapointMessagesUserMessage`

```typescript
const value: operations.UpdateDatapointMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://suburban-vein.info",
      },
    },
  ],
};
```

### `operations.UpdateDatapointMessagesAssistantMessage`

```typescript
const value: operations.UpdateDatapointMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.UpdateDatapointMessagesToolMessage`

```typescript
const value: operations.UpdateDatapointMessagesToolMessage = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

