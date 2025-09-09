# CreateMemoryDocumentRequestBody

## Example Usage

```typescript
import { CreateMemoryDocumentRequestBody } from "@orq-ai/node/models/operations";

let value: CreateMemoryDocumentRequestBody = {
  text: "<value>",
  tags: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `text`                                                          | *string*                                                        | :heavy_check_mark:                                              | The content of the memory                                       |
| `tags`                                                          | Record<string, *string*>                                        | :heavy_check_mark:                                              | Use the tags to categorize documents within a memory collection |