# AgentDeploymentStats

## Example Usage

```typescript
import { AgentDeploymentStats } from "@orq-ai/node/models/components";

let value: AgentDeploymentStats = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `lastRunAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `lastRunStatus`                                                                                 | [components.AgentDeploymentRunStatus](../../models/components/agentdeploymentrunstatus.md)      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `runCount`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `periodCost`                                                                                    | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `nextRunAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `upcomingRunsAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `recentRuns`                                                                                    | [components.AgentDeploymentRunSummary](../../models/components/agentdeploymentrunsummary.md)[]  | :heavy_minus_sign:                                                                              | Output only: the latest settled runs, oldest first, capped at 30.                               |