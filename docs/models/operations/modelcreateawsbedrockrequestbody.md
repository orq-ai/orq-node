# ModelCreateAwsBedrockRequestBody

## Example Usage

```typescript
import { ModelCreateAwsBedrockRequestBody } from "@orq-ai/node/models/operations";

let value: ModelCreateAwsBedrockRequestBody = {
  authMode: "<value>",
  displayName: "Kayleigh_Grant-Padberg56",
  modelDeveloper: "<value>",
  modelId: "<id>",
  region: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `assumeRoleArn`             | *string*                    | :heavy_minus_sign:          | N/A                         |
| `assumeRoleExternalId`      | *string*                    | :heavy_minus_sign:          | N/A                         |
| `authMode`                  | *string*                    | :heavy_check_mark:          | N/A                         |
| `autorouterId`              | *string*                    | :heavy_minus_sign:          | N/A                         |
| `autorouterVersion`         | *string*                    | :heavy_minus_sign:          | N/A                         |
| `description`               | *string*                    | :heavy_minus_sign:          | N/A                         |
| `displayName`               | *string*                    | :heavy_check_mark:          | N/A                         |
| `hasReasoning`              | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `inputCost`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `integrationId`             | *string*                    | :heavy_minus_sign:          | N/A                         |
| `maxTokens`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `modelDeveloper`            | *string*                    | :heavy_check_mark:          | N/A                         |
| `modelFamily`               | *string*                    | :heavy_minus_sign:          | N/A                         |
| `modelId`                   | *string*                    | :heavy_check_mark:          | N/A                         |
| `modelType`                 | *string*                    | :heavy_minus_sign:          | N/A                         |
| `outputCost`                | *number*                    | :heavy_minus_sign:          | N/A                         |
| `region`                    | *string*                    | :heavy_check_mark:          | N/A                         |
| `supportsAdaptiveReasoning` | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `supportsExtendedThinking`  | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `supportsJsonMode`          | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `supportsJsonSchema`        | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `supportsStrictTool`        | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `supportsToolCalling`       | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `supportsVision`            | *boolean*                   | :heavy_minus_sign:          | N/A                         |
| `temperature`               | *number*                    | :heavy_minus_sign:          | N/A                         |