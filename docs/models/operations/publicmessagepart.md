# PublicMessagePart

Message part that can be provided by users. Use "text" for regular messages, "file" for attachments, or "tool_result" when responding to tool call requests.


## Supported Types

### `components.TextPart`

```typescript
const value: components.TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.FilePart`

```typescript
const value: operations.FilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.ToolResultPart`

```typescript
const value: operations.ToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

