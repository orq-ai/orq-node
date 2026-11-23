# PublicBatchExpiresAfter

## Example Usage

```typescript
import { PublicBatchExpiresAfter } from "@orq-ai/node/models/components";

let value: PublicBatchExpiresAfter = {
  seconds: 303424,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `anchor`                                                | [components.Anchor](../../models/components/anchor.md)  | :heavy_minus_sign:                                      | Point the lifetime starts from. Defaults to created_at. |
| `seconds`                                               | *number*                                                | :heavy_check_mark:                                      | Lifetime of the file, in seconds.                       |