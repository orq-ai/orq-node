# FunctionParams


## Supported Types

### `components.One`

```typescript
const value: components.One = {
  type: "contains",
  value: "<value>",
};
```

### `components.Two`

```typescript
const value: components.Two = {
  type: "contains_none",
  keywords: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `components.Three`

```typescript
const value: components.Three = {
  type: "contains_all",
  keywords: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `components.Four`

```typescript
const value: components.Four = {
  type: "contains_any",
  keywords: [],
};
```

### `components.Five`

```typescript
const value: components.Five = {
  type: "contains_email",
};
```

### `components.Six`

```typescript
const value: components.Six = {
  type: "contains_url",
};
```

### `components.Seven`

```typescript
const value: components.Seven = {
  type: "contains_valid_link",
};
```

### `components.Eight`

```typescript
const value: components.Eight = {
  type: "start_with",
  value: "<value>",
};
```

### `components.Nine`

```typescript
const value: components.Nine = {
  type: "ends_with",
  value: "<value>",
};
```

### `components.Ten`

```typescript
const value: components.Ten = {
  type: "exact_match",
};
```

### `components.Eleven`

```typescript
const value: components.Eleven = {
  type: "length_less_than",
  value: 1493.93,
};
```

### `components.Twelve`

```typescript
const value: components.Twelve = {
  type: "length_between",
  min: 4530.84,
  max: 1705.51,
};
```

### `components.Thirteen`

```typescript
const value: components.Thirteen = {
  type: "length_greater_than",
  value: 1177.11,
};
```

### `components.Fourteen`

```typescript
const value: components.Fourteen = {
  type: "one_line",
};
```

### `components.Fifteen`

```typescript
const value: components.Fifteen = {
  type: "regex",
  pattern: "<value>",
};
```

### `components.Sixteen`

```typescript
const value: components.Sixteen = {
  type: "is_valid_json",
};
```

### `components.Seventeen`

```typescript
const value: components.Seventeen = {
  type: "moderations_openai",
};
```

### `components.Eighteen`

```typescript
const value: components.Eighteen = {
  type: "moderations_google",
};
```

### `components.Nineteen`

```typescript
const value: components.Nineteen = {
  type: "bert_score",
};
```

### `components.Twenty`

```typescript
const value: components.Twenty = {
  type: "bleu_score",
};
```

### `components.TwentyOne`

```typescript
const value: components.TwentyOne = {
  type: "rouge_n",
};
```

### `components.TwentyTwo`

```typescript
const value: components.TwentyTwo = {
  type: "meteor_score",
};
```

### `components.TwentyThree`

```typescript
const value: components.TwentyThree = {
  type: "cosine_similarity",
};
```

### `components.TwentyFour`

```typescript
const value: components.TwentyFour = {
  type: "levenshtein_distance",
};
```

### `components.TwentyFive`

```typescript
const value: components.TwentyFive = {
  type: "keywords_match",
  keywords: [
    "<value 1>",
  ],
};
```

### `components.TwentySix`

```typescript
const value: components.TwentySix = {
  type: "most_repeated_words",
};
```

### `components.TwentySeven`

```typescript
const value: components.TwentySeven = {
  type: "flesch_reading_ease",
};
```

### `components.TwentyEight`

```typescript
const value: components.TwentyEight = {
  type: "gse_english_level",
};
```

### `components.TwentyNine`

```typescript
const value: components.TwentyNine = {
  type: "words_count",
};
```

### `components.Thirty`

```typescript
const value: components.Thirty = {
  type: "sentences_count",
};
```

### `components.ThirtyOne`

```typescript
const value: components.ThirtyOne = {
  type: "lexical_repetition",
};
```

### `components.ThirtyTwo`

```typescript
const value: components.ThirtyTwo = {
  type: "grammar_diversity",
};
```

