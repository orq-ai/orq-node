# RequestBody1


## Supported Types

### `operations.Llm`

```typescript
const value: operations.Llm = {
  type: "llm_eval",
  prompt: "<value>",
  path: "Default Project",
  projectId: "01JMDPA3QW5C1V0NJ1PW34T4E5",
  key: "<key>",
  mode: "single",
  model: "Model S",
};
```

### `operations.LLMJury`

```typescript
const value: operations.LLMJury = {
  type: "llm_eval",
  prompt: "<value>",
  path: "Default Project",
  projectId: "01JMDPA3QW5C1V0NJ1PW34T4E5",
  key: "<key>",
  mode: "jury",
  jury: {
    judges: [
      {
        model: "A8",
      },
    ],
  },
};
```

