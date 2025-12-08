# PartDelta

The content chunk being streamed. Discriminated by kind field (text or reasoning).


## Supported Types

### `components.TextPart`

```typescript
const value: components.TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `components.ReasoningPart`

```typescript
const value: components.ReasoningPart = {
  id: "reasoning_01hxyz123abc",
  metadata: {
    "source": "user_input",
    "timestamp": "2024-01-15T10:30:00Z",
  },
  kind: "reasoning",
  reasoning: "Let me analyze this step by step...",
  signature: "sha256:a1b2c3d4e5f6...",
};
```

### `components.FilePart`

```typescript
const value: components.FilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `components.DataPart`

```typescript
const value: components.DataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

