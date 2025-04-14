# UpdateMemoryDocumentRequestBody

## Example Usage

```typescript
import { UpdateMemoryDocumentRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateMemoryDocumentRequestBody = {
  text: "<value>",
  tags: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `text`                                                          | *string*                                                        | :heavy_check_mark:                                              | The content of the memory                                       |
| `tags`                                                          | Record<string, *string*>                                        | :heavy_check_mark:                                              | Use the tags to categorize documents within a memory collection |