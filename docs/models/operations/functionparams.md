# FunctionParams


## Supported Types

### `operations.CreateEvalFunctionParams1`

```typescript
const value: operations.CreateEvalFunctionParams1 = {
  type: "contains",
  value: "<value>",
};
```

### `operations.CreateEvalFunctionParams2`

```typescript
const value: operations.CreateEvalFunctionParams2 = {
  type: "contains_none",
  keywords: [
    "<value 1>",
  ],
};
```

### `operations.CreateEvalFunctionParams3`

```typescript
const value: operations.CreateEvalFunctionParams3 = {
  type: "contains_all",
  keywords: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.CreateEvalFunctionParams4`

```typescript
const value: operations.CreateEvalFunctionParams4 = {
  type: "contains_any",
  keywords: [
    "<value 1>",
  ],
};
```

### `operations.CreateEvalFunctionParams5`

```typescript
const value: operations.CreateEvalFunctionParams5 = {
  type: "contains_email",
};
```

### `operations.CreateEvalFunctionParams6`

```typescript
const value: operations.CreateEvalFunctionParams6 = {
  type: "contains_url",
};
```

### `operations.CreateEvalFunctionParams7`

```typescript
const value: operations.CreateEvalFunctionParams7 = {
  type: "contains_valid_link",
};
```

### `operations.CreateEvalFunctionParams8`

```typescript
const value: operations.CreateEvalFunctionParams8 = {
  type: "start_with",
  value: "<value>",
};
```

### `operations.CreateEvalFunctionParams9`

```typescript
const value: operations.CreateEvalFunctionParams9 = {
  type: "ends_with",
  value: "<value>",
};
```

### `operations.CreateEvalFunctionParams10`

```typescript
const value: operations.CreateEvalFunctionParams10 = {
  type: "exact_match",
};
```

### `operations.CreateEvalFunctionParams11`

```typescript
const value: operations.CreateEvalFunctionParams11 = {
  type: "length_less_than",
  value: 3529.79,
};
```

### `operations.CreateEvalFunctionParams12`

```typescript
const value: operations.CreateEvalFunctionParams12 = {
  type: "length_between",
  min: 9290.81,
  max: 1247.95,
};
```

### `operations.CreateEvalFunctionParams13`

```typescript
const value: operations.CreateEvalFunctionParams13 = {
  type: "length_greater_than",
  value: 1582.59,
};
```

### `operations.CreateEvalFunctionParams14`

```typescript
const value: operations.CreateEvalFunctionParams14 = {
  type: "one_line",
};
```

### `operations.CreateEvalFunctionParams15`

```typescript
const value: operations.CreateEvalFunctionParams15 = {
  type: "regex",
  pattern: "<value>",
};
```

### `operations.CreateEvalFunctionParams16`

```typescript
const value: operations.CreateEvalFunctionParams16 = {
  type: "is_valid_json",
};
```

### `operations.CreateEvalFunctionParams17`

```typescript
const value: operations.CreateEvalFunctionParams17 = {
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

### `operations.TwentyFive`

```typescript
const value: operations.TwentyFive = {
  type: "keywords_match",
  keywords: [
    "<value 1>",
  ],
};
```

### `operations.TwentySix`

```typescript
const value: operations.TwentySix = {
  type: "most_repeated_words",
};
```

### `operations.TwentySeven`

```typescript
const value: operations.TwentySeven = {
  type: "flesch_reading_ease",
};
```

### `operations.TwentyEight`

```typescript
const value: operations.TwentyEight = {
  type: "gse_english_level",
};
```

### `operations.TwentyNine`

```typescript
const value: operations.TwentyNine = {
  type: "words_count",
};
```

### `operations.Thirty`

```typescript
const value: operations.Thirty = {
  type: "sentences_count",
};
```

### `operations.ThirtyOne`

```typescript
const value: operations.ThirtyOne = {
  type: "lexical_repetition",
};
```

### `operations.ThirtyTwo`

```typescript
const value: operations.ThirtyTwo = {
  type: "grammar_diversity",
};
```

