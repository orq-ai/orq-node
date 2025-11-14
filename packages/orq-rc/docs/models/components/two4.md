# Two4

## Example Usage

```typescript
import { Two4 } from "@orq-ai/node/models/components";

let value: Two4 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [components.InvokeDeploymentRequest2Messages3Content4Type](../../models/components/invokedeploymentrequest2messages3content4type.md) | :heavy_check_mark:                                                                                                                   | The type of the content part. Always `file`.                                                                                         |
| `file`                                                                                                                               | [components.TwoFile](../../models/components/twofile.md)                                                                             | :heavy_check_mark:                                                                                                                   | File data for the content part. Must contain either file_data or uri, but not both.                                                  |