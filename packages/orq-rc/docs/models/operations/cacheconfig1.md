# CacheConfig1

Schema for exact matching type of cache.

## Example Usage

```typescript
import { CacheConfig1 } from "@orq-ai/node/models/operations";

let value: CacheConfig1 = {
  type: "exact",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [operations.CacheConfigType](../../models/operations/cacheconfigtype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `ttl`                                                                    | *number*                                                                 | :heavy_minus_sign:                                                       | Time To Live                                                             |