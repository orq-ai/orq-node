# UpdateDatapoint2DatasetsImageUrl

## Example Usage

```typescript
import { UpdateDatapoint2DatasetsImageUrl } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2DatasetsImageUrl = {
  url: "https://unfinished-trench.name/",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | Either a URL of the image or the base64 encoded image data.                                            |
| `detail`                                                                                               | [operations.UpdateDatapoint2DatasetsDetail](../../models/operations/updatedatapoint2datasetsdetail.md) | :heavy_minus_sign:                                                                                     | Specifies the detail level of the image.                                                               |