# SmartRouterMetrics

## Example Usage

```typescript
import { SmartRouterMetrics } from "@orq-ai/node/models/components";

let value: SmartRouterMetrics = {
  requests: 3569.37,
  spend: 3837.65,
  traffic: {
    "key": 4741.53,
    "key1": 8050.27,
    "key2": 3632.67,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `requests`                                                          | *number*                                                            | :heavy_check_mark:                                                  | Total gateway requests served by the router over the window.        |
| `spend`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Total cost in USD attributed to the router over the window.         |
| `traffic`                                                           | Record<string, *number*>                                            | :heavy_check_mark:                                                  | Requests per selected model, keyed by the provider/model reference. |