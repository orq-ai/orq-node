# CacheConfig


## Supported Types

### `operations.CacheConfig1`

```typescript
const value: operations.CacheConfig1 = {
  type: "exact",
  ttl: 3600,
};
```

### `operations.CacheConfig2`

```typescript
const value: operations.CacheConfig2 = {
  type: "semantic",
  modelConfig: {
    model: "Camaro",
    modelDbId: "9a8bcc68-cff5-46dc-b7dc-41b0ef56fa46",
    modelType: "stt",
    modelParameters: {},
    provider: "elevenlabs",
  },
  ttl: 3600,
};
```

