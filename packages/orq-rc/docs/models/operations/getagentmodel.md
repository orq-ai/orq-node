# GetAgentModel

## Example Usage

```typescript
import { GetAgentModel } from "@orq-ai/node/models/operations";

let value: GetAgentModel = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The database ID of the primary model                                                                     |
| `integrationId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Optional integration ID for custom model configurations                                                  |
| `fallbackModels`                                                                                         | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | Optional array of fallback model IDs that will be used automatically in order if the primary model fails |
| `maxTokens`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Maximum number of tokens for model responses                                                             |
| `temperature`                                                                                            | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Temperature setting for model responses                                                                  |