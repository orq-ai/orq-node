# ThreadFilters

## Example Usage

```typescript
import { ThreadFilters } from "@orq-ai/node/models/components";

let value: ThreadFilters = {
  interval: "SESSION_INTERVAL_LAST_6_HOURS",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `interval`                                                               | [components.SessionInterval](../../models/components/sessioninterval.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tags`                                                                   | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `startDate`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Start of a custom activity window in unix milliseconds.                  |
| `endDate`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | End of a custom activity window in unix milliseconds.                    |
| `client`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `repo`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `kind`                                                                   | [components.ThreadKind](../../models/components/threadkind.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |