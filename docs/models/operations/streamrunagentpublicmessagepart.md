# StreamRunAgentPublicMessagePart

Message part that can be provided by users. Use "text" for regular messages, "file" for attachments, or "tool_result" when responding to tool call requests.


## Supported Types

### `components.TextPart`

```typescript
const value: components.TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamRunAgentPublicMessagePartFilePart`

```typescript
const value: operations.StreamRunAgentPublicMessagePartFilePart = {
  kind: "file",
  file: {
    uri: "https://calculating-offset.net",
  },
};
```

### `operations.StreamRunAgentPublicMessagePartToolResultPart`

```typescript
const value: operations.StreamRunAgentPublicMessagePartToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

