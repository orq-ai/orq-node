# RetrievalSettings

The retrieval settings for the knowledge base. If not provider, Hybrid Search will be used as a default query strategy.


## Supported Types

### `operations.RetrievalSettings1`

```typescript
const value: operations.RetrievalSettings1 = {
  type: "vector_search",
};
```

### `operations.RetrievalSettings2`

```typescript
const value: operations.RetrievalSettings2 = {
  type: "keyword_search",
};
```

### `operations.RetrievalSettings3`

```typescript
const value: operations.RetrievalSettings3 = {
  type: "hybrid_search",
};
```

