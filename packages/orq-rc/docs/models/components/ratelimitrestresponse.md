# RateLimitRestResponse

RateLimit is the per-minute request ceiling. Enforced via atomic
 increment-first semantics in the enforcement middleware.

## Example Usage

```typescript
import { RateLimitRestResponse } from "@orq-ai/node/models/components";

let value: RateLimitRestResponse = {};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `requestsPerMinute` | *number*            | :heavy_minus_sign:  | N/A                 |