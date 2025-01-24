# Settings

## Example Usage

```typescript
import { Settings } from "@orq-ai/node/models/operations";

let value: Settings = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `outputMasking`                                                                        | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `isCachingEnabled`                                                                     | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `cacheConfig`                                                                          | *operations.DataCacheConfig*                                                           | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `evaluators`                                                                           | *operations.DataEvaluators*[]                                                          | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `guardrailsBehavior`                                                                   | [operations.DataGuardrailsBehavior](../../models/operations/dataguardrailsbehavior.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |