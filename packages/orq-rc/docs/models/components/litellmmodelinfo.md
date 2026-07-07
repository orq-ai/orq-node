# LiteLLMModelInfo

## Example Usage

```typescript
import { LiteLLMModelInfo } from "@orq-ai/node/models/components";

let value: LiteLLMModelInfo = {
  dbModel: true,
  id: "<id>",
  key: "<key>",
  litellmProvider: "<value>",
  mode: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `dbModel`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `id`                      | *string*                  | :heavy_check_mark:        | N/A                       |
| `inputCostPerToken`       | *number*                  | :heavy_minus_sign:        | N/A                       |
| `key`                     | *string*                  | :heavy_check_mark:        | N/A                       |
| `litellmProvider`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `maxInputTokens`          | *number*                  | :heavy_minus_sign:        | N/A                       |
| `maxOutputTokens`         | *number*                  | :heavy_minus_sign:        | N/A                       |
| `mode`                    | *string*                  | :heavy_check_mark:        | N/A                       |
| `outputCostPerToken`      | *number*                  | :heavy_minus_sign:        | N/A                       |
| `supportedOpenaiParams`   | *string*[]                | :heavy_minus_sign:        | N/A                       |
| `supportsFunctionCalling` | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `supportsNativeStreaming` | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `supportsReasoning`       | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `supportsResponseSchema`  | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `supportsSystemMessages`  | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `supportsToolChoice`      | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `supportsVision`          | *boolean*                 | :heavy_minus_sign:        | N/A                       |