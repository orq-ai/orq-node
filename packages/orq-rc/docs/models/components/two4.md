# Two4

## Example Usage

```typescript
import { Two4 } from "@orq-ai/node/models/components";

let value: Two4 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.Deployments2Messages3Content4Type](../../models/components/deployments2messages3content4type.md) | :heavy_check_mark:                                                                                           | The type of the content part. Always `file`.                                                                 |
| `file`                                                                                                       | [components.TwoFile](../../models/components/twofile.md)                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |