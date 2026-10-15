# ClassifyAnswer

One answer to a classification question. The type selects the answer fields. A refusal contains only type.


## Supported Types

### `components.ClassifyBoxAnswer`

```typescript
const value: components.ClassifyBoxAnswer = {
  box: {
    bottom: 5088.18,
    left: 6889.1,
    right: 4459.51,
    top: 178.25,
  },
  type: "box",
};
```

### `components.ClassifyChoiceAnswer`

```typescript
const value: components.ClassifyChoiceAnswer = {
  choice: "<value>",
  type: "choice",
};
```

### `components.ClassifyNoulAnswer`

```typescript
const value: components.ClassifyNoulAnswer = {
  noul: 7389.16,
  type: "noul",
};
```

### `components.ClassifyRefusalAnswer`

```typescript
const value: components.ClassifyRefusalAnswer = {
  type: "refusal",
};
```

### `components.ClassifyScoreAnswer`

```typescript
const value: components.ClassifyScoreAnswer = {
  score: 5100.81,
  type: "score",
};
```

