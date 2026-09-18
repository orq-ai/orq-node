# Document1

## Example Usage

```typescript
import { Document1 } from "@orq-ai/node/models/operations";

let value: Document1 = {
  type: "document_url",
  documentUrl: "https://example.com/invoice.pdf",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `type`                          | *"document_url"*                | :heavy_check_mark:              | N/A                             |                                 |
| `documentUrl`                   | *string*                        | :heavy_check_mark:              | URL of the document to process  | https://example.com/invoice.pdf |
| `documentName`                  | *string*                        | :heavy_minus_sign:              | The name of the document        |                                 |