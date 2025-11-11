# Artifacts

## Example Usage

```typescript
import { Artifacts } from "@orq-ai/node/models/operations";

let value: Artifacts = {
  kind: "artifact",
  artifactId: "<id>",
  name: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `kind`                                                                                 | [operations.GetAgentTaskAgentsKind](../../models/operations/getagenttaskagentskind.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `artifactId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `url`                                                                                  | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `data`                                                                                 | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |