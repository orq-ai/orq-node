# Three

## Example Usage

```typescript
import { Three } from "@orq-ai/node/models/operations";

let value: Three = {
  type: "image",
  role: "correction",
  url: "https://essential-tabletop.org/",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *"image"*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `role`                                                                                           | [operations.DeploymentInvokeMessageRole](../../models/operations/deploymentinvokemessagerole.md) | :heavy_check_mark:                                                                               | The role of the prompt message                                                                   |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |