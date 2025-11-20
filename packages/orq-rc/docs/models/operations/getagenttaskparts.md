# GetAgentTaskParts


## Supported Types

### `operations.GetAgentTaskPartsTextPart`

```typescript
const value: operations.GetAgentTaskPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.GetAgentTaskPartsFilePart`

```typescript
const value: operations.GetAgentTaskPartsFilePart = {
  kind: "file",
  file: {
    uri: "https://spherical-lid.org",
  },
};
```

### `operations.PartsDataPart`

```typescript
const value: operations.PartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

