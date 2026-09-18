# ModelCreateOpenAILikeRequestBody

## Example Usage

```typescript
import { ModelCreateOpenAILikeRequestBody } from "@orq-ai/node/models/operations";

let value: ModelCreateOpenAILikeRequestBody = {
  apiKey: "<value>",
  baseUrl: "https://damp-vicinity.com",
  displayName: "Graciela.Moore23",
  modelId: "<id>",
  modelType: "<value>",
  region: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `apiKey`              | *string*              | :heavy_check_mark:    | N/A                   |
| `baseUrl`             | *string*              | :heavy_check_mark:    | N/A                   |
| `costPerImage`        | *number*              | :heavy_minus_sign:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `displayName`         | *string*              | :heavy_check_mark:    | N/A                   |
| `hasReasoning`        | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `inputCost`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `maxTokens`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `modelId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `modelType`           | *string*              | :heavy_check_mark:    | N/A                   |
| `outputCost`          | *number*              | :heavy_minus_sign:    | N/A                   |
| `region`              | *string*              | :heavy_check_mark:    | N/A                   |
| `supportsImageEdit`   | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `supportsStrictTool`  | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `supportsToolCalling` | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `supportsVision`      | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `temperature`         | *number*              | :heavy_minus_sign:    | N/A                   |