# RetrieveDatapointContent2


## Supported Types

### `operations.RetrieveDatapoint21`

```typescript
const value: operations.RetrieveDatapoint21 = {
  type: "text",
  text: "<value>",
};
```

### `operations.RetrieveDatapoint22`

```typescript
const value: operations.RetrieveDatapoint22 = {
  type: "image_url",
  imageUrl: {
    url: "https://long-term-eggplant.net",
  },
};
```

### `operations.RetrieveDatapoint23`

```typescript
const value: operations.RetrieveDatapoint23 = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "wav",
  },
};
```

### `operations.RetrieveDatapoint24`

```typescript
const value: operations.RetrieveDatapoint24 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

