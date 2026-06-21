# ModelValidateAwsBedrockRequestBody

## Example Usage

```typescript
import { ModelValidateAwsBedrockRequestBody } from "@orq-ai/node/models/operations";

let value: ModelValidateAwsBedrockRequestBody = {
  authMode: "<value>",
  inferenceProfileArn: "<value>",
  region: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `assumeRoleArn`        | *string*               | :heavy_minus_sign:     | N/A                    |
| `assumeRoleExternalId` | *string*               | :heavy_minus_sign:     | N/A                    |
| `authMode`             | *string*               | :heavy_check_mark:     | N/A                    |
| `inferenceProfileArn`  | *string*               | :heavy_check_mark:     | N/A                    |
| `integrationId`        | *string*               | :heavy_minus_sign:     | N/A                    |
| `modelType`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `region`               | *string*               | :heavy_check_mark:     | N/A                    |