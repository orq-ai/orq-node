# GetV2ModelsLitellmModelsModelInfo

## Example Usage

```typescript
import { GetV2ModelsLitellmModelsModelInfo } from "@orq-ai/node/models/operations";

let value: GetV2ModelsLitellmModelsModelInfo = {
  id: "<id>",
  dbModel: false,
  key: "<key>",
  litellmProvider: "<value>",
  mode: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `dbModel`                               | *boolean*                               | :heavy_check_mark:                      | N/A                                     |
| `key`                                   | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `maxTokens`                             | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `maxInputTokens`                        | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `maxOutputTokens`                       | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerToken`                     | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `cacheCreationInputTokenCost`           | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `cacheReadInputTokenCost`               | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerCharacter`                 | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerTokenAbove128kTokens`      | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerTokenAbove200kTokens`      | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerQuery`                     | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerSecond`                    | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerAudioToken`                | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `inputCostPerTokenBatches`              | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerTokenBatches`             | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerToken`                    | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerAudioToken`               | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerCharacter`                | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerReasoningToken`           | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerTokenAbove128kTokens`     | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerCharacterAbove128kTokens` | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerTokenAbove200kTokens`     | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerSecond`                   | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputCostPerImage`                    | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `outputVectorSize`                      | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `litellmProvider`                       | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `mode`                                  | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `supportsSystemMessages`                | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsResponseSchema`                | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsVision`                        | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsFunctionCalling`               | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsToolChoice`                    | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsAssistantPrefill`              | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsPromptCaching`                 | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsAudioInput`                    | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsAudioOutput`                   | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsPdfInput`                      | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsEmbeddingImageInput`           | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsNativeStreaming`               | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsWebSearch`                     | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsUrlContext`                    | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsReasoning`                     | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `supportsComputerUse`                   | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `searchContextCostPerQuery`             | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `tpm`                                   | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `rpm`                                   | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `supportedOpenaiParams`                 | *string*[]                              | :heavy_minus_sign:                      | N/A                                     |