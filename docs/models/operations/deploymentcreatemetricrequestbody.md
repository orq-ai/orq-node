# DeploymentCreateMetricRequestBody

The deployment request payload

## Example Usage

```typescript
import { DeploymentCreateMetricRequestBody } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricRequestBody = {};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                                                               | Record<string, *any*>                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                       | Your own custom key-value pairs can be attached to the logs. This is useful for storing additional information related to your interactions with the LLM providers or specifics within your application. |
| `usage`                                                                                                                                                                                                  | [operations.Usage](../../models/operations/usage.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                       | Usage statistics to add to the deployment                                                                                                                                                                |
| `performance`                                                                                                                                                                                            | [operations.Performance](../../models/operations/performance.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `messages`                                                                                                                                                                                               | [operations.DeploymentCreateMetricMessages](../../models/operations/deploymentcreatemetricmessages.md)[]                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | A list of messages sent to the model.                                                                                                                                                                    |
| `choices`                                                                                                                                                                                                | [operations.Choices](../../models/operations/choices.md)[]                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | A list of completion choices. If you are using a `completion` model then you must provide the `completion content` with the chat completion format                                                       |
| `feedback`                                                                                                                                                                                               | [operations.Feedback](../../models/operations/feedback.md)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Feedback from the user on the completion                                                                                                                                                                 |