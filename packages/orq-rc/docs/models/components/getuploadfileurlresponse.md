# GetUploadFileUrlResponse

## Example Usage

```typescript
import { GetUploadFileUrlResponse } from "@orq-ai/node/models/components";

let value: GetUploadFileUrlResponse = {
  objectName: "<value>",
  postPolicy: {
    postURL: "https://idolized-suv.biz/",
    formData: {},
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `objectName`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `postPolicy`                                                               | [components.UploadPostPolicy](../../models/components/uploadpostpolicy.md) | :heavy_check_mark:                                                         | N/A                                                                        |