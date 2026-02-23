# Llm


## Supported Types

### `operations.Llm1`

```typescript
const value: operations.Llm1 = {
  type: "llm_eval",
  prompt: "<value>",
  path: "Default",
  key: "<key>",
  mode: "single",
  model: "Grand Caravan",
};
```

### `operations.Llm2`

```typescript
const value: operations.Llm2 = {
  type: "llm_eval",
  prompt: "<value>",
  path: "Default",
  key: "<key>",
  mode: "jury",
  jury: {
    judges: [
      {
        model: "Altima",
      },
    ],
  },
};
```

