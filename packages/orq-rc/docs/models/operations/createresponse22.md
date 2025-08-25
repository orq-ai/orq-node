# CreateResponse22

An image input content part.

## Example Usage

```typescript
import { CreateResponse22 } from "@orq-ai/node/models/operations";

let value: CreateResponse22 = {
  type: "input_image",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.CreateResponse2ProxyType](../../models/operations/createresponse2proxytype.md) | :heavy_check_mark:                                                                         | The type of input content part                                                             |
| `detail`                                                                                   | [operations.CreateResponse2Detail](../../models/operations/createresponse2detail.md)       | :heavy_minus_sign:                                                                         | Level of detail for image analysis                                                         |
| `fileId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | File ID for the image                                                                      |
| `imageUrl`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | URL of the image (can be http URL or data URL)                                             |