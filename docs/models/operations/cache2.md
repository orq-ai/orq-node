# Cache2

## Example Usage

```typescript
import { Cache2 } from "@orq-ai/node/models/operations";

let value: Cache2 = {
  enabled: true,
  type: "semantic",
  ttl: 53.47,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `enabled`                                                    | *true*                                                       | :heavy_check_mark:                                           | N/A                                                          |
| `type`                                                       | [operations.CacheType](../../models/operations/cachetype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `ttl`                                                        | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |