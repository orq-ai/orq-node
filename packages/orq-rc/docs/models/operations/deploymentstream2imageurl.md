# DeploymentStream2ImageUrl

## Example Usage

```typescript
import { DeploymentStream2ImageUrl } from "@orq-ai/node/models/operations";

let value: DeploymentStream2ImageUrl = {
  url: "https://warm-lounge.biz",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | Either a URL of the image or the base64 encoded image data.                              |
| `detail`                                                                                 | [operations.DeploymentStream2Detail](../../models/operations/deploymentstream2detail.md) | :heavy_minus_sign:                                                                       | Specifies the detail level of the image.                                                 |