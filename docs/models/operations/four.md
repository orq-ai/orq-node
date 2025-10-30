# Four

## Example Usage

```typescript
import { Four } from "@orq-ai/node/models/operations";

let value: Four = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.DeploymentGetConfig2DeploymentsType](../../models/operations/deploymentgetconfig2deploymentstype.md) | :heavy_check_mark:                                                                                               | The type of the content part. Always `file`.                                                                     |
| `file`                                                                                                           | [operations.FileT](../../models/operations/filet.md)                                                             | :heavy_check_mark:                                                                                               | File data for the content part. Must contain either file_data or uri, but not both.                              |