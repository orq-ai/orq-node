# RetrieveDatapoint22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { RetrieveDatapoint22 } from "@orq-ai/node/models/operations";

let value: RetrieveDatapoint22 = {
  type: "image_url",
  imageUrl: {
    url: "https://overdue-puppet.biz/",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.RetrieveDatapoint2DatasetsType](../../models/operations/retrievedatapoint2datasetstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `imageUrl`                                                                                             | [operations.RetrieveDatapoint2ImageUrl](../../models/operations/retrievedatapoint2imageurl.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |