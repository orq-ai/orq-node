# ProcessingAttempts

## Example Usage

```typescript
import { ProcessingAttempts } from "@orq-ai/node/models/operations";

let value: ProcessingAttempts = {
  id: "<id>",
  startedAt: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `startedAt`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `queuedAt`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `completedAt`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `errors`                                                 | [operations.Errors](../../models/operations/errors.md)[] | :heavy_minus_sign:                                       | N/A                                                      |