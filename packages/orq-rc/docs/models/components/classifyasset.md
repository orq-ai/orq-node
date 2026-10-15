# ClassifyAsset

## Example Usage

```typescript
import { ClassifyAsset } from "@orq-ai/node/models/components";

let value: ClassifyAsset = {
  dataBase64: "<value>",
  format: "jpg",
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataBase64`                                                                                                                                | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Standard base64 with padding, without whitespace or a data: prefix. PNG or JPEG still images, 256 to 1568 px per side, at most 16 MiB each. |
| `format`                                                                                                                                    | [components.Format](../../models/components/format.md)                                                                                      | :heavy_check_mark:                                                                                                                          | The image format.                                                                                                                           |
| `type`                                                                                                                                      | [components.ClassifyAssetType](../../models/components/classifyassettype.md)                                                                | :heavy_minus_sign:                                                                                                                          | The asset type. Only image is supported.                                                                                                    |