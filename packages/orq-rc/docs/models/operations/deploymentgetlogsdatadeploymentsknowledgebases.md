# DeploymentGetLogsDataDeploymentsKnowledgeBases

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsKnowledgeBases } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsKnowledgeBases = {
  knowledgeId: "<id>",
  configuration: {
    type: "last_user_message",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The id of the resource                                                                     |
| `configuration`                                                                            | *operations.DeploymentGetLogsDataDeploymentsConfiguration*                                 | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |