# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseData

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseData,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseData =
    {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `b64Json`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The base64-encoded JSON of the generated image, if response_format is b64_json |
| `url`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | The URL of the generated image, if response_format is url (default)            |