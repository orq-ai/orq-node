# StreamAgentPublicMessagePart

Message part that can be provided by users. Use "text" for regular messages, "file" for attachments, or "tool_result" when responding to tool call requests.


## Supported Types

### `components.TextPart`

```typescript
const value: components.TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamAgentPublicMessagePartFilePart`

```typescript
const value: operations.StreamAgentPublicMessagePartFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.StreamAgentPublicMessagePartToolResultPart`

```typescript
const value: operations.StreamAgentPublicMessagePartToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

