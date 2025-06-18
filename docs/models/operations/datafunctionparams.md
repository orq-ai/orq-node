# DataFunctionParams


## Supported Types

### `operations.FunctionParams1`

```typescript
const value: operations.FunctionParams1 = {
  type: "contains",
  value: "<value>",
};
```

### `operations.FunctionParams2`

```typescript
const value: operations.FunctionParams2 = {
  type: "contains_none",
  keywords: [],
};
```

### `operations.FunctionParams3`

```typescript
const value: operations.FunctionParams3 = {
  type: "contains_all",
  keywords: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.FunctionParams4`

```typescript
const value: operations.FunctionParams4 = {
  type: "contains_any",
  keywords: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.Five`

```typescript
const value: operations.Five = {
  type: "contains_email",
};
```

### `operations.Six`

```typescript
const value: operations.Six = {
  type: "contains_url",
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  type: "contains_valid_link",
};
```

### `operations.Eight`

```typescript
const value: operations.Eight = {
  type: "start_with",
  value: "<value>",
};
```

### `operations.Nine`

```typescript
const value: operations.Nine = {
  type: "ends_with",
  value: "<value>",
};
```

### `operations.Ten`

```typescript
const value: operations.Ten = {
  type: "exact_match",
};
```

### `operations.Eleven`

```typescript
const value: operations.Eleven = {
  type: "length_less_than",
  value: 1493.93,
};
```

### `operations.Twelve`

```typescript
const value: operations.Twelve = {
  type: "length_between",
  min: 4530.84,
  max: 1705.51,
};
```

### `operations.Thirteen`

```typescript
const value: operations.Thirteen = {
  type: "length_greater_than",
  value: 1177.11,
};
```

### `operations.Fourteen`

```typescript
const value: operations.Fourteen = {
  type: "one_line",
};
```

### `operations.Fifteen`

```typescript
const value: operations.Fifteen = {
  type: "regex",
  pattern: "<value>",
};
```

### `operations.Sixteen`

```typescript
const value: operations.Sixteen = {
  type: "is_valid_json",
};
```

### `operations.Seventeen`

```typescript
const value: operations.Seventeen = {
  type: "moderations_openai",
};
```

### `operations.Eighteen`

```typescript
const value: operations.Eighteen = {
  type: "moderations_google",
};
```

### `operations.Nineteen`

```typescript
const value: operations.Nineteen = {
  type: "bert_score",
};
```

### `operations.Twenty`

```typescript
const value: operations.Twenty = {
  type: "bleu_score",
};
```

### `operations.TwentyOne`

```typescript
const value: operations.TwentyOne = {
  type: "rouge_n",
};
```

### `operations.TwentyTwo`

```typescript
const value: operations.TwentyTwo = {
  type: "meteor_score",
};
```

### `operations.TwentyThree`

```typescript
const value: operations.TwentyThree = {
  type: "cosine_similarity",
};
```

### `operations.TwentyFour`

```typescript
const value: operations.TwentyFour = {
  type: "levenshtein_distance",
};
```

