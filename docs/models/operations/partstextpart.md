# PartsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { PartsTextPart } from "@orq-ai/node/models/operations";

let value: PartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `kind`                                                       | [operations.PartsKind](../../models/operations/partskind.md) | :heavy_check_mark:                                           | N/A                                                          |
| `text`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |