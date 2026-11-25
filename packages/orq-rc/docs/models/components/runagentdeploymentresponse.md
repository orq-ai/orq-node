# RunAgentDeploymentResponse

## Example Usage

```typescript
import { RunAgentDeploymentResponse } from "@orq-ai/node/models/components";

let value: RunAgentDeploymentResponse = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `run`                                                                                              | [components.AgentDeploymentRun](../../models/components/agentdeploymentrun.md)                     | :heavy_minus_sign:                                                                                 | Admission ledger entry for one firing; input, output and usage live on the response and its trace. |