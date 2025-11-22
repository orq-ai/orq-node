# RunAgentPublicMessagePart

Message part that can be provided by users. Use "text" for regular messages, "file" for attachments, or "tool_result" when responding to tool call requests.


## Supported Types

### `operations.RunAgentPublicMessagePartTextPart`

```typescript
const value: operations.RunAgentPublicMessagePartTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.RunAgentPublicMessagePartFilePart`

```typescript
const value: operations.RunAgentPublicMessagePartFilePart = {
  kind: "file",
  file: {
    uri: "https://admired-bowler.name/",
  },
};
```

### `operations.RunAgentPublicMessagePartToolResultPart`

```typescript
const value: operations.RunAgentPublicMessagePartToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

