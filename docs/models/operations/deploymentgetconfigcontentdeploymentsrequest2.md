# DeploymentGetConfigContentDeploymentsRequest2


## Supported Types

### `components.TextContentPartSchema`

```typescript
const value: components.TextContentPartSchema = {
  type: "text",
  text: "<value>",
};
```

### `components.ImageContentPartSchema`

```typescript
const value: components.ImageContentPartSchema = {
  type: "image_url",
  imageUrl: {
    url: "https://fatal-overload.name/",
  },
};
```

### `components.AudioContentPartSchema`

```typescript
const value: components.AudioContentPartSchema = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "mp3",
  },
};
```

### `operations.Two4`

```typescript
const value: operations.Two4 = {
  type: "file",
  file: {},
};
```

