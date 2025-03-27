# PrefixMessages


## Supported Types

### `components.DeveloperMessage`

```typescript
const value: components.DeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `components.SystemMessage`

```typescript
const value: components.SystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `components.UserMessage`

```typescript
const value: components.UserMessage = {
  role: "user",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://eminent-stay.name",
      },
    },
  ],
};
```

### `components.AssistantMessage`

```typescript
const value: components.AssistantMessage = {
  role: "assistant",
};
```

### `components.ToolMessage`

```typescript
const value: components.ToolMessage = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

