# CreateEvalRequestBody


## Supported Types

### `operations.Llm`

```typescript
const value: operations.Llm = {
  type: "llm_eval",
  prompt: "<value>",
  path: "Default",
  description: "",
  key: "<key>",
  mode: "single",
  model: "Alpine",
};
```

### `operations.Json`

```typescript
const value: operations.Json = {
  type: "json_schema",
  schema: "<value>",
  path: "Default",
  key: "<key>",
};
```

### `operations.Python`

```typescript
const value: operations.Python = {
  code: "<value>",
  type: "python_eval",
  path: "Default",
  key: "<key>",
};
```

