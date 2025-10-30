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

### `operations.CreateEvalFunctionParams18`

```typescript
const value: operations.CreateEvalFunctionParams18 = {
  type: "moderations_google",
};
```

### `operations.CreateEvalFunctionParams19`

```typescript
const value: operations.CreateEvalFunctionParams19 = {
  type: "bert_score",
};
```

### `operations.CreateEvalFunctionParams20`

```typescript
const value: operations.CreateEvalFunctionParams20 = {
  type: "bleu_score",
};
```

### `operations.CreateEvalFunctionParams21`

```typescript
const value: operations.CreateEvalFunctionParams21 = {
  type: "rouge_n",
};
```

### `operations.CreateEvalFunctionParams22`

```typescript
const value: operations.CreateEvalFunctionParams22 = {
  type: "meteor_score",
};
```

### `operations.CreateEvalFunctionParams23`

```typescript
const value: operations.CreateEvalFunctionParams23 = {
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
  type: "topic_match",
  topic: "<value>",
};
```

### `operations.TwentySix`

```typescript
const value: operations.TwentySix = {
  type: "keywords_match",
  keywords: [],
};
```

### `operations.TwentySeven`

```typescript
const value: operations.TwentySeven = {
  type: "most_repeated_words",
};
```

### `operations.TwentyEight`

```typescript
const value: operations.TwentyEight = {
  type: "flesch_reading_ease",
};
```

### `operations.TwentyNine`

```typescript
const value: operations.TwentyNine = {
  type: "gse_english_level",
};
```

### `operations.Thirty`

```typescript
const value: operations.Thirty = {
  type: "words_count",
};
```

### `operations.ThirtyOne`

```typescript
const value: operations.ThirtyOne = {
  type: "sentences_count",
};
```

### `operations.ThirtyTwo`

```typescript
const value: operations.ThirtyTwo = {
  type: "lexical_repetition",
};
```

### `operations.ThirtyThree`

```typescript
const value: operations.ThirtyThree = {
  type: "semantic_repetition",
};
```

### `operations.ThirtyFour`

```typescript
const value: operations.ThirtyFour = {
  type: "grammar_diversity",
};
```

### `operations.ThirtyFive`

```typescript
const value: operations.ThirtyFive = {
  type: "bert_coherence",
};
```

