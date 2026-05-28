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

### `operations.Python`

```typescript
const value: operations.Python = {
  code: "<value>",
  type: "python_eval",
  path: "Default",
  key: "<key>",
};
```

