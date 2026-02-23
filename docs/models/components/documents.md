# Documents

## Example Usage

```typescript
import { Documents } from "@orq-ai/node/models/components";

let value: Documents = {
  text: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `text`                                                     | *string*                                                   | :heavy_check_mark:                                         | The text content of the document                           |
| `metadata`                                                 | [components.Metadata](../../models/components/metadata.md) | :heavy_minus_sign:                                         | Metadata about the document                                |