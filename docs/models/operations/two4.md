# Two4

## Example Usage

```typescript
import { Two4 } from "@orq-ai/node/models/operations";

let value: Two4 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                 | [operations.DeploymentGetConfig2DeploymentsRequestRequestBodyMessages3Content4Type](../../models/operations/deploymentgetconfig2deploymentsrequestrequestbodymessages3content4type.md) | :heavy_check_mark:                                                                                                                                                                     | The type of the content part. Always `file`.                                                                                                                                           |
| `file`                                                                                                                                                                                 | [operations.TwoFile](../../models/operations/twofile.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |