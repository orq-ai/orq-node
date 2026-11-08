# CreateEvalRequestBody


## Supported Types

### `operations.RequestBody1`

```typescript
const value: operations.RequestBody1 = {
  type: "llm_eval",
  prompt: "<value>",
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
  projectId: "01JMDPA3QW5C1V0NJ1PW34T4E5",
  key: "<key>",
};
```

