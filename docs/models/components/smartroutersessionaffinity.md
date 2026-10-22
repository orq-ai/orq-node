# SmartRouterSessionAffinity

## Example Usage

```typescript
import { SmartRouterSessionAffinity } from "@orq-ai/node/models/components";

let value: SmartRouterSessionAffinity = {
  enabled: false,
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                                        | *boolean*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                               | Whether later turns of a thread stay on the model chosen for its first turn. Only requests that carry a thread id take part. Off by default.                     |
| `ttlSeconds`                                                                                                                                                     | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Sliding idle window in seconds. A thread that stays quiet longer than this is routed afresh on its next turn. Between 60 and 3600. Defaults to 600 when omitted. |