# DeploymentCreateMetric2ImageUrl

## Example Usage

```typescript
import { DeploymentCreateMetric2ImageUrl } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetric2ImageUrl = {
  url: "https://sour-disposer.info",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | Either a URL of the image or the base64 encoded image data.                                          |
| `detail`                                                                                             | [operations.DeploymentCreateMetric2Detail](../../models/operations/deploymentcreatemetric2detail.md) | :heavy_minus_sign:                                                                                   | Specifies the detail level of the image.                                                             |