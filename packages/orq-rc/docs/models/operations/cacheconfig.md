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
    modelDbId: "<id>",
    modelType: "stt",
    modelParameters: {},
    provider: "alibaba",
  },
  ttl: 3600,
};
```

