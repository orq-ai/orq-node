# Judges

## Example Usage

```typescript
import { Judges } from "@orq-ai/node/models/components";

let value: Judges = {
  model: "LeBaron",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `model`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `retry`                                                        | [components.Retry](../../models/components/retry.md)           | :heavy_minus_sign:                                             | N/A                                                            |
| `fallbacks`                                                    | [components.Fallbacks](../../models/components/fallbacks.md)[] | :heavy_minus_sign:                                             | N/A                                                            |