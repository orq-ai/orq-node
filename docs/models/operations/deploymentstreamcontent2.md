# DeploymentStreamContent2


## Supported Types

### `operations.DeploymentStream21`

```typescript
const value: operations.DeploymentStream21 = {
  type: "text",
  text: "<value>",
};
```

### `operations.DeploymentStream22`

```typescript
const value: operations.DeploymentStream22 = {
  type: "image_url",
  imageUrl: {
    url: "https://unhappy-toothpick.com/",
  },
};
```

### `operations.DeploymentStream23`

```typescript
const value: operations.DeploymentStream23 = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "wav",
  },
};
```

### `operations.DeploymentStream24`

```typescript
const value: operations.DeploymentStream24 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

