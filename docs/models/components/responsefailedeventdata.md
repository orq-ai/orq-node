# ResponseFailedEventData

## Example Usage

```typescript
import { ResponseFailedEventData } from "@orq-ai/node/models/components";

let value: ResponseFailedEventData = {
  error: "<value>",
  code: 5535.69,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `error`                                    | *string*                                   | :heavy_check_mark:                         | Error message describing what went wrong   |
| `code`                                     | *number*                                   | :heavy_check_mark:                         | HTTP status code indicating the error type |