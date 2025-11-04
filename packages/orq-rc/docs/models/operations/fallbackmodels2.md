# FallbackModels2

## Example Usage

```typescript
import { FallbackModels2 } from "@orq-ai/node/models/operations";

let value: FallbackModels2 = {
  id: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Fallback model ID                                                                          |
| `integrationId`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `parameters`                                                                               | [operations.FallbackModelsParameters](../../models/operations/fallbackmodelsparameters.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |