# Matches

## Example Usage

```typescript
import { Matches } from "@orq-ai/node/models/operations";

let value: Matches = {
  id: "<id>",
  text: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `text`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `vector`                                               | *number*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `metadata`                                             | Record<string, *any*>                                  | :heavy_minus_sign:                                     | N/A                                                    |
| `scores`                                               | [operations.Scores](../../models/operations/scores.md) | :heavy_minus_sign:                                     | N/A                                                    |