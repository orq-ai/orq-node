# DeploymentStreamMessage1

## Example Usage

```typescript
import { DeploymentStreamMessage1 } from "@orq-ai/node/models/operations";

let value: DeploymentStreamMessage1 = {
  role: "system",
  toolCalls: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                       | [operations.DeploymentStreamMessageRole](../../models/operations/deploymentstreammessagerole.md)             | :heavy_check_mark:                                                                                           | The role of the prompt message                                                                               |
| `content`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `toolCalls`                                                                                                  | [operations.DeploymentStreamMessageToolCalls](../../models/operations/deploymentstreammessagetoolcalls.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |