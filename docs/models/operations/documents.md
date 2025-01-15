# Documents

## Example Usage

```typescript
import { Documents } from "@orq-ai/node/models/operations";

let value: Documents = {
  text: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `text`                                                     | *string*                                                   | :heavy_check_mark:                                         | The text content of the document                           |
| `metadata`                                                 | [operations.Metadata](../../models/operations/metadata.md) | :heavy_minus_sign:                                         | Metadata about the document                                |