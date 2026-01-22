# DeploymentGetConfig23

## Example Usage

```typescript
import { DeploymentGetConfig23 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfig23 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *"file"*                                                 | :heavy_check_mark:                                       | The type of the content part. Always `file`.             |
| `file`                                                   | [operations.TwoFile](../../models/operations/twofile.md) | :heavy_check_mark:                                       | N/A                                                      |