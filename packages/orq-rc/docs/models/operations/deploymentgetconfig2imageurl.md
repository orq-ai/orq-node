# DeploymentGetConfig2ImageUrl

## Example Usage

```typescript
import { DeploymentGetConfig2ImageUrl } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfig2ImageUrl = {
  url: "https://worldly-gastropod.name",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | Either a URL of the image or the base64 encoded image data.  |
| `detail`                                                     | [operations.TwoDetail](../../models/operations/twodetail.md) | :heavy_minus_sign:                                           | Specifies the detail level of the image.                     |