# DeploymentStreamUsage

Usage metrics for the response

## Example Usage

```typescript
import { DeploymentStreamUsage } from "@orq-ai/node/models/operations";

let value: DeploymentStreamUsage = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `totalTokens`                                                                                                            | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `promptTokens`                                                                                                           | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `completionTokens`                                                                                                       | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `promptTokensDetails`                                                                                                    | [operations.DeploymentStreamPromptTokensDetails](../../models/operations/deploymentstreamprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `completionTokensDetails`                                                                                                | [operations.DeploymentStreamCompletionTokensDetails](../../models/operations/deploymentstreamcompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |