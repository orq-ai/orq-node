# DeploymentStream2DeploymentsTextContentPart

## Example Usage

```typescript
import { DeploymentStream2DeploymentsTextContentPart } from "@orq-ai/node/models/operations";

let value: DeploymentStream2DeploymentsTextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | [operations.DeploymentStream2DeploymentsRequestRequestBodyMessages4Type](../../models/operations/deploymentstream2deploymentsrequestrequestbodymessages4type.md) | :heavy_check_mark:                                                                                                                                               | The type of the content part.                                                                                                                                    |
| `text`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The text content.                                                                                                                                                |
| `annotations`                                                                                                                                                    | *operations.DeploymentStream2DeploymentsAnnotations*[]                                                                                                           | :heavy_minus_sign:                                                                                                                                               | Annotations for the text content.                                                                                                                                |