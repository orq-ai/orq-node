# QueryReportRequestGrain

Requested bucket grain. Use `auto` or omit the field to let the server choose based on the requested range.

## Example Usage

```typescript
import { QueryReportRequestGrain } from "@orq-ai/node/models/components";

let value: QueryReportRequestGrain = "day";
```

## Values

```typescript
"auto" | "minute" | "hour" | "day"
```