# Questions


## Supported Types

### `operations.NoulQuestion`

```typescript
const value: operations.NoulQuestion = {
  instructions: {
    "0": "<value 1>",
  },
  type: "noul",
};
```

### `operations.ChoiceQuestion`

```typescript
const value: operations.ChoiceQuestion = {
  criteria: {},
  instructions: "<value>",
  type: "choice",
};
```

### `operations.ScoreQuestion`

```typescript
const value: operations.ScoreQuestion = {
  criteria: [
    "<value 1>",
  ],
  instructions: "<value>",
  type: "score",
};
```

