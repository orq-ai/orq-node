# RetrievalConfig

Allow to modify the retrieval config for the search. If not provided, the knowledge base configuration set in the database will be used.


## Supported Types

### `operations.RetrievalConfig1`

```typescript
const value: operations.RetrievalConfig1 = {
  type: "vector_search",
};
```

### `operations.RetrievalConfig2`

```typescript
const value: operations.RetrievalConfig2 = {
  type: "keyword_search",
};
```

### `operations.RetrievalConfig3`

```typescript
const value: operations.RetrievalConfig3 = {
  type: "hybrid_search",
};
```

