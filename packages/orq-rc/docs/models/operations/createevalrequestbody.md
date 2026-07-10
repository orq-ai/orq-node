# CreateEvalRequestBody


## Supported Types

### `operations.RequestBody1`

```typescript
const value: operations.RequestBody1 = {
  type: "llm_eval",
  prompt: "<value>",
  path: "Default",
  description: "",
  key: "<key>",
  mode: "jury",
  jury: {
    judges: [
      {
        model: "A8",
      },
    ],
    minSuccessfulJudges: 2,
    tieValue: "Tie",
  },
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

