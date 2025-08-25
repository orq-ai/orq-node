# CreateChatCompletion24

## Example Usage

```typescript
import { CreateChatCompletion24 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletion24 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.CreateChatCompletion2ProxyRequestRequestBodyType](../../models/operations/createchatcompletion2proxyrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                         | The type of the content part. Always `file`.                                                                                               |
| `file`                                                                                                                                     | [operations.CreateChatCompletion2File](../../models/operations/createchatcompletion2file.md)                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |