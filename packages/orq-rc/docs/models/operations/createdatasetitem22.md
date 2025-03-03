# CreateDatasetItem22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreateDatasetItem22 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem22 = {
  type: "image_url",
  imageUrl: {
    url: "https://reckless-squid.com/",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.CreateDatasetItem2DatasetsType](../../models/operations/createdatasetitem2datasetstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `imageUrl`                                                                                             | [operations.CreateDatasetItem2ImageUrl](../../models/operations/createdatasetitem2imageurl.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |