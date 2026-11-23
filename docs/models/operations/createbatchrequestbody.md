# CreateBatchRequestBody

## Example Usage

```typescript
import { CreateBatchRequestBody } from "@orq-ai/node/models/operations";

let value: CreateBatchRequestBody = {
  completionWindow: "24h",
  endpoint: "/v3/router/decisions",
  inputFileId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `completionWindow`                                                                       | [operations.CompletionWindow](../../models/operations/completionwindow.md)               | :heavy_check_mark:                                                                       | Time window the batch runs in. Only 24h is supported.                                    |
| `endpoint`                                                                               | [operations.Endpoint](../../models/operations/endpoint.md)                               | :heavy_check_mark:                                                                       | Endpoint each line is sent to. The batch model must support it.                          |
| `inputFileId`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of an uploaded JSONL file whose purpose is batch.                                     |
| `metadata`                                                                               | Record<string, *string*>                                                                 | :heavy_minus_sign:                                                                       | Up to 16 key/value pairs, keys up to 64 characters and values up to 512.                 |
| `outputExpiresAfter`                                                                     | [components.PublicBatchExpiresAfter](../../models/components/publicbatchexpiresafter.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |