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

### `operations.PublicMessagePartFilePart`

```typescript
const value: operations.PublicMessagePartFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.PublicMessagePartToolResultPart`

```typescript
const value: operations.PublicMessagePartToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

