# DeploymentStream2TextContentPart

## Example Usage

```typescript
import { DeploymentStream2TextContentPart } from "@orq-ai/node/models/operations";

let value: DeploymentStream2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.DeploymentStream2DeploymentsRequestRequestBodyType](../../models/operations/deploymentstream2deploymentsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                             | The type of the content part.                                                                                                                  |
| `text`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The text content.                                                                                                                              |