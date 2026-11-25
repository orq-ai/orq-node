# AgentDeploymentRunSummary

One firing in the deployment's recent run history.

## Example Usage

```typescript
import { AgentDeploymentRunSummary } from "@orq-ai/node/models/components";

let value: AgentDeploymentRunSummary = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `runId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.AgentDeploymentRunStatus](../../models/components/agentdeploymentrunstatus.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | [components.AgentDeploymentRunReason](../../models/components/agentdeploymentrunreason.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |