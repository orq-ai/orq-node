# GetIPAllowlistResponse

## Example Usage

```typescript
import { GetIPAllowlistResponse } from "@orq-ai/node/models/components";

let value: GetIPAllowlistResponse = {
  ipAllowlist: {
    enabled: true,
    ranges: [],
  },
  currentIp: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ipAllowlist`                                                    | [components.IPAllowlist](../../models/components/ipallowlist.md) | :heavy_check_mark:                                               | N/A                                                              |
| `currentIp`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |