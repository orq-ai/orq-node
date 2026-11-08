# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "@orq-ai/node/models/errors";

// No examples available for this model
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `message`                                               | *string*                                                | :heavy_check_mark:                                      | Human-readable error message.                           |
| `code`                                                  | *number*                                                | :heavy_minus_sign:                                      | Numeric error code, when one is available.              |
| `details`                                               | *any*[]                                                 | :heavy_minus_sign:                                      | Additional error details, when the service reports any. |