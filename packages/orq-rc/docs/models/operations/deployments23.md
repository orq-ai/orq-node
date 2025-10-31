# Deployments23

## Example Usage

```typescript
import { Deployments23 } from "@orq-ai/node/models/operations";

let value: Deployments23 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.Deployments2DeploymentsType](../../models/operations/deployments2deploymentstype.md) | :heavy_check_mark:                                                                               | The type of the content part. Always `file`.                                                     |
| `file`                                                                                           | [operations.Deployments2File](../../models/operations/deployments2file.md)                       | :heavy_check_mark:                                                                               | N/A                                                                                              |