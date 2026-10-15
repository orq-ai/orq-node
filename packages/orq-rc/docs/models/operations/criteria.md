# Criteria

Optional descriptions of what true and false mean.

## Example Usage

```typescript
import { Criteria } from "@orq-ai/node/models/operations";

let value: Criteria = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `false`                                            | *operations.False*                                 | :heavy_minus_sign:                                 | What false means. A string, an object or an array. |
| `true`                                             | *operations.True*                                  | :heavy_minus_sign:                                 | What true means. A string, an object or an array.  |