# RoutingRuleCacheConfig

## Example Usage

```typescript
import { RoutingRuleCacheConfig } from "@orq-ai/node/models/components";

let value: RoutingRuleCacheConfig = {
  ttl: 170352,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `ttl`                                                           | *number*                                                        | :heavy_check_mark:                                              | Cache time to live in seconds. Maximum 259200 seconds (3 days). |