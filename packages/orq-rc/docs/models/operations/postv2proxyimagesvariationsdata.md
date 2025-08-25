# PostV2ProxyImagesVariationsData

## Example Usage

```typescript
import { PostV2ProxyImagesVariationsData } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesVariationsData = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `b64Json`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The base64-encoded JSON of the generated image, if response_format is b64_json |
| `url`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | The URL of the generated image, if response_format is url (default)            |