# Judges

## Example Usage

```typescript
import { Judges } from "@orq-ai/node/models/operations";

let value: Judges = {
  model: "LeBaron",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `model`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `retry`                                                        | [operations.Retry](../../models/operations/retry.md)           | :heavy_minus_sign:                                             | N/A                                                            |
| `fallbacks`                                                    | [operations.Fallbacks](../../models/operations/fallbacks.md)[] | :heavy_minus_sign:                                             | N/A                                                            |