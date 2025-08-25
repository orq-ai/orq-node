# CreateChatCompletionContent2


## Supported Types

### `operations.CreateChatCompletion21`

```typescript
const value: operations.CreateChatCompletion21 = {
  type: "text",
  text: "<value>",
};
```

### `operations.CreateChatCompletion22`

```typescript
const value: operations.CreateChatCompletion22 = {
  type: "image_url",
  imageUrl: {
    url: "https://slimy-rationale.name/",
  },
};
```

### `operations.CreateChatCompletion23`

```typescript
const value: operations.CreateChatCompletion23 = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "wav",
  },
};
```

### `operations.CreateChatCompletion24`

```typescript
const value: operations.CreateChatCompletion24 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

