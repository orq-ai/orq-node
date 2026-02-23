# Judges

## Example Usage

```typescript
import { Judges } from "@orq-ai/node/models/operations";

let value: Judges = {
  model: "LeBaron",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `retry`                                                                                                  | [operations.UpdateEvalRequestBodyRetry](../../models/operations/updateevalrequestbodyretry.md)           | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `fallbacks`                                                                                              | [operations.UpdateEvalRequestBodyFallbacks](../../models/operations/updateevalrequestbodyfallbacks.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |