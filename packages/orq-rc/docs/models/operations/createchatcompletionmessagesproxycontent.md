# CreateChatCompletionMessagesProxyContent

The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.CreateChatCompletionContentProxy2[]`

```typescript
const value: operations.CreateChatCompletionContentProxy2[] = [
  {
    type: "text",
    text: "<value>",
  },
];
```

