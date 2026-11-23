# ColumnLayout

Layout change for one column.

## Example Usage

```typescript
import { ColumnLayout } from "@orq-ai/node/models/components";

let value: ColumnLayout = {
  columnId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `columnId`                                                  | *string*                                                    | :heavy_check_mark:                                          | ID of the column to change.                                 |
| `position`                                                  | *number*                                                    | :heavy_minus_sign:                                          | New 0-based position. The other columns shift to make room. |
| `width`                                                     | *number*                                                    | :heavy_minus_sign:                                          | New width, at least 1.                                      |
| `active`                                                    | *boolean*                                                   | :heavy_minus_sign:                                          | False hides the column; true shows it.                      |