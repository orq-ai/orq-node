# ProcessingAttempt

## Example Usage

```typescript
import { ProcessingAttempt } from "@orq-ai/node/models/components";

let value: ProcessingAttempt = {
  id: "<id>",
  startedAt: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `startedAt`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `queuedAt`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `completedAt`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `errors`                                                                   | [components.ProcessingError](../../models/components/processingerror.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `retryable`                                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |