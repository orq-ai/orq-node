# RateLimit

RateLimit is the per-minute request ceiling. Enforced via atomic
 increment-first semantics in the enforcement middleware.

## Example Usage

```typescript
import { RateLimit } from "@orq-ai/node/models/components";

let value: RateLimit = {};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `requestsPerMinute` | *number*            | :heavy_minus_sign:  | N/A                 |