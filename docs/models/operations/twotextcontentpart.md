# TwoTextContentPart

## Example Usage

```typescript
import { TwoTextContentPart } from "@orq-ai/node/models/operations";

let value: TwoTextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.DeploymentGetConfig2DeploymentsRequestRequestBodyMessages4Type](../../models/operations/deploymentgetconfig2deploymentsrequestrequestbodymessages4type.md) | :heavy_check_mark:                                                                                                                                                     | The type of the content part.                                                                                                                                          |
| `text`                                                                                                                                                                 | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The text content.                                                                                                                                                      |