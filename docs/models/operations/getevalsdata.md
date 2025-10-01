# GetEvalsData


## Supported Types

### `operations.DataLLM`

```typescript
const value: operations.DataLLM = {
  id: "<id>",
  description:
    "advertisement list amid vainly bah partially owlishly treble why however",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  model: "Element",
};
```

### `operations.DataJSON`

```typescript
const value: operations.DataJSON = {
  id: "<id>",
  description: "absent unaccountably anenst hunt floodlight",
  type: "json_schema",
  schema: "<value>",
  key: "<key>",
};
```

### `operations.DataHTTP`

```typescript
const value: operations.DataHTTP = {
  id: "<id>",
  description: "queasy incidentally neatly tall necessary",
  type: "http_eval",
  url: "https://majestic-alert.biz/",
  method: "GET",
  headers: {
    "key": "<value>",
  },
  payload: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  key: "<key>",
};
```

### `operations.DataPython`

```typescript
const value: operations.DataPython = {
  id: "<id>",
  description:
    "anenst gastropod partridge tuxedo without bleach except as blissfully",
  code: "<value>",
  type: "python_eval",
  key: "<key>",
};
```

### `operations.DataFunction`

```typescript
const value: operations.DataFunction = {
  id: "<id>",
  description: "down at for gee excitable huzzah acidic provided hmph",
  type: "function_eval",
  functionParams: {
    type: "most_repeated_words",
  },
  key: "<key>",
};
```

### `operations.DataRagas`

```typescript
const value: operations.DataRagas = {
  id: "<id>",
  description: "hurtful deny doodle for",
  type: "ragas",
  ragasMetric: "context_entities_recall",
  key: "<key>",
  model: "El Camino",
};
```

### `operations.DataTypescript`

```typescript
const value: operations.DataTypescript = {
  id: "<id>",
  description: "psst trench forceful",
  code: "<value>",
  type: "typescript_eval",
  key: "<key>",
};
```

