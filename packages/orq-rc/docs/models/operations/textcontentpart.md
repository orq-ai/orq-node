# TextContentPart

## Example Usage

```typescript
import { TextContentPart } from "@orq-ai/node/models/operations";

let value: TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.DeploymentGetConfig2DeploymentsType](../../models/operations/deploymentgetconfig2deploymentstype.md) | :heavy_check_mark:                                                                                               | The type of the content part.                                                                                    |
| `text`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The text content.                                                                                                |