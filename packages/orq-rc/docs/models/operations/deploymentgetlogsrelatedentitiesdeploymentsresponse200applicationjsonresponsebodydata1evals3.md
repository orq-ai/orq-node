# DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData1Evals3

Define the relationship between an entity and a human eval, also known as feedback

## Example Usage

```typescript
import {
  DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData1Evals3,
} from "@orq-ai/node/models/operations";

let value:
  DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData1Evals3 =
    {
      type: "human_eval",
      humanEvalId: "<id>",
    };
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                       | [operations.DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData1Evals13Type](../../models/operations/deploymentgetlogsrelatedentitiesdeploymentsresponse200applicationjsonresponsebodydata1evals13type.md) | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `humanEvalId`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | The id of the resource                                                                                                                                                                                                                       |