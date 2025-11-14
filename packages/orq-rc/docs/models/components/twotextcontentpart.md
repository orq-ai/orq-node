# TwoTextContentPart

## Example Usage

```typescript
import { TwoTextContentPart } from "@orq-ai/node/models/components";

let value: TwoTextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.InvokeDeploymentRequest2Messages4Type](../../models/components/invokedeploymentrequest2messages4type.md) | :heavy_check_mark:                                                                                                   | The type of the content part.                                                                                        |
| `text`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The text content.                                                                                                    |
| `annotations`                                                                                                        | *components.TwoAnnotations*[]                                                                                        | :heavy_minus_sign:                                                                                                   | Annotations for the text content.                                                                                    |