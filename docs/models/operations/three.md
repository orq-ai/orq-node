# Three

## Example Usage

```typescript
import { Three } from "@orq-ai/node/models/operations";

let value: Three = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *"file"*                                                 | :heavy_check_mark:                                       | The type of the content part. Always `file`.             |
| `file`                                                   | [operations.TwoFile](../../models/operations/twofile.md) | :heavy_check_mark:                                       | N/A                                                      |