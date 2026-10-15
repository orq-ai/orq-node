# CreateDecisionsQuestions


## Supported Types

### `operations.QuestionsNoulQuestion`

```typescript
const value: operations.QuestionsNoulQuestion = {
  instructions: {},
  type: "noul",
};
```

### `operations.QuestionsChoiceQuestion`

```typescript
const value: operations.QuestionsChoiceQuestion = {
  criteria: {
    "key": "<value>",
  },
  instructions: {},
  type: "choice",
};
```

### `operations.QuestionsScoreQuestion`

```typescript
const value: operations.QuestionsScoreQuestion = {
  criteria: [
    "<value 1>",
  ],
  instructions: {
    "0": "<value 1>",
    "1": "<value 2>",
  },
  type: "score",
};
```

### `operations.QuestionsBoxQuestion`

```typescript
const value: operations.QuestionsBoxQuestion = {
  instructions: {
    "key": "<value>",
  },
  type: "box",
};
```

