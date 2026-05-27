# ModelUpdateOpenAILikeRequestBody

## Example Usage

```typescript
import { ModelUpdateOpenAILikeRequestBody } from "@orq-ai/node/models/operations";

let value: ModelUpdateOpenAILikeRequestBody = {
  displayName: "Hector.Lemke7",
  modelType: "<value>",
  region: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `baseUrl`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `costPerImage`        | *number*              | :heavy_minus_sign:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `displayName`         | *string*              | :heavy_check_mark:    | N/A                   |
| `hasReasoning`        | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `inputCost`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `maxTokens`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `modelId`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `modelType`           | *string*              | :heavy_check_mark:    | N/A                   |
| `outputCost`          | *number*              | :heavy_minus_sign:    | N/A                   |
| `region`              | *string*              | :heavy_check_mark:    | N/A                   |
| `supportsImageEdit`   | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `supportsStrictTool`  | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `supportsToolCalling` | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `supportsVision`      | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `temperature`         | *number*              | :heavy_minus_sign:    | N/A                   |