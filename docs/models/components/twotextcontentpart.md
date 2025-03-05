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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [components.Deployments2Messages4Type](../../models/components/deployments2messages4type.md) | :heavy_check_mark:                                                                           | The type of the content part.                                                                |
| `text`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The text content.                                                                            |