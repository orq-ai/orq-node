# CreateEvalResponseBodyFunctionParams


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

### `operations.FunctionParams5`

```typescript
const value: operations.FunctionParams5 = {
  type: "contains_email",
};
```

### `operations.FunctionParams6`

```typescript
const value: operations.FunctionParams6 = {
  type: "contains_url",
};
```

### `operations.FunctionParams7`

```typescript
const value: operations.FunctionParams7 = {
  type: "contains_valid_link",
};
```

### `operations.FunctionParams8`

```typescript
const value: operations.FunctionParams8 = {
  type: "start_with",
  value: "<value>",
};
```

### `operations.FunctionParams9`

```typescript
const value: operations.FunctionParams9 = {
  type: "ends_with",
  value: "<value>",
};
```

### `operations.FunctionParams10`

```typescript
const value: operations.FunctionParams10 = {
  type: "exact_match",
};
```

### `operations.FunctionParams11`

```typescript
const value: operations.FunctionParams11 = {
  type: "length_less_than",
  value: 6346.02,
};
```

### `operations.FunctionParams12`

```typescript
const value: operations.FunctionParams12 = {
  type: "length_between",
  min: 5418.21,
  max: 5310.29,
};
```

### `operations.FunctionParams13`

```typescript
const value: operations.FunctionParams13 = {
  type: "length_greater_than",
  value: 9362.11,
};
```

### `operations.FunctionParams14`

```typescript
const value: operations.FunctionParams14 = {
  type: "one_line",
};
```

### `operations.FunctionParams15`

```typescript
const value: operations.FunctionParams15 = {
  type: "regex",
  pattern: "<value>",
};
```

### `operations.FunctionParams16`

```typescript
const value: operations.FunctionParams16 = {
  type: "is_valid_json",
};
```

### `operations.FunctionParams17`

```typescript
const value: operations.FunctionParams17 = {
  type: "moderations_openai",
};
```

### `operations.FunctionParams18`

```typescript
const value: operations.FunctionParams18 = {
  type: "moderations_google",
};
```

### `operations.FunctionParams19`

```typescript
const value: operations.FunctionParams19 = {
  type: "bert_score",
};
```

### `operations.FunctionParams20`

```typescript
const value: operations.FunctionParams20 = {
  type: "bleu_score",
};
```

### `operations.FunctionParams21`

```typescript
const value: operations.FunctionParams21 = {
  type: "rouge_n",
};
```

### `operations.FunctionParams22`

```typescript
const value: operations.FunctionParams22 = {
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

