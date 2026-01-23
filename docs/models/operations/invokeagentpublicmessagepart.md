# InvokeAgentPublicMessagePart

Message part that can be provided by users. Use "text" for regular messages, "file" for attachments, or "tool_result" when responding to tool call requests.


## Supported Types

### `components.TextPart`

```typescript
const value: components.TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `components.FilePart`

```typescript
const value: components.FilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `components.ToolResultPart`

```typescript
const value: components.ToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

### `components.ErrorPart`

```typescript
const value: components.ErrorPart = {
  kind: "error",
  error: "<value>",
};
```

