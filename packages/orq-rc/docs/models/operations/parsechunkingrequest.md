# ParseChunkingRequest

Request payload for text chunking with strategy-specific configuration


## Supported Types

### `operations.TokenChunkerStrategy`

```typescript
const value: operations.TokenChunkerStrategy = {
  text: "<value>",
  strategy: "token",
};
```

### `operations.SentenceChunkerStrategy`

```typescript
const value: operations.SentenceChunkerStrategy = {
  text: "<value>",
  strategy: "sentence",
};
```

### `operations.RecursiveChunkerStrategy`

```typescript
const value: operations.RecursiveChunkerStrategy = {
  text: "<value>",
  strategy: "recursive",
};
```

### `operations.SemanticChunkerStrategy`

```typescript
const value: operations.SemanticChunkerStrategy = {
  text: "<value>",
  strategy: "semantic",
  embeddingModel: "<value>",
};
```

### `operations.SDPMChunkerStrategy`

```typescript
const value: operations.SDPMChunkerStrategy = {
  text: "<value>",
  strategy: "sdpm",
  embeddingModel: "<value>",
};
```

### `operations.AgenticChunkerStrategy`

```typescript
const value: operations.AgenticChunkerStrategy = {
  text: "<value>",
  strategy: "agentic",
  model: "openai/gpt-4.1",
};
```

