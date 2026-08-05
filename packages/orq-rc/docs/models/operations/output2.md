# Output2

## Example Usage

```typescript
import { Output2 } from "@orq-ai/node/models/operations";

let value: Output2 = {
  text: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `task`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `language`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `duration`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `text`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `words`                                                                  | [operations.OutputWords](../../models/operations/outputwords.md)[]       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `segments`                                                               | [operations.OutputSegments](../../models/operations/outputsegments.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |