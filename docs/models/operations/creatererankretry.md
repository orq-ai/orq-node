# CreateRerankRetry

Retry configuration for the request

## Example Usage

```typescript
import { CreateRerankRetry } from "@orq-ai/node/models/operations";

let value: CreateRerankRetry = {
  count: 2,
  onCodes: [
    429,
    500,
    502,
    503,
    504,
  ],
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                               | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Number of retries per model after the initial attempt (0-5). Defaults to 0 when a retry object is sent; omit retry to use the gateway default of two. | 2                                                                                                                                                     |
| `onCodes`                                                                                                                                             | *number*[]                                                                                                                                            | :heavy_minus_sign:                                                                                                                                    | HTTP status codes that trigger retry logic                                                                                                            | [<br/>429,<br/>500,<br/>502,<br/>503,<br/>504<br/>]                                                                                                   |