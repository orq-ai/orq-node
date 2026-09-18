# Document1

## Example Usage

```typescript
import { Document1 } from "@orq-ai/node/models/operations";

let value: Document1 = {
  type: "document_url",
  documentUrl: "https://electric-teammate.name",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `type`                         | *"document_url"*               | :heavy_check_mark:             | N/A                            |
| `documentUrl`                  | *string*                       | :heavy_check_mark:             | URL of the document to process |
| `documentName`                 | *string*                       | :heavy_minus_sign:             | The name of the document       |