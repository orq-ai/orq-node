# ReplayAuditLogDeliveriesResponse

## Example Usage

```typescript
import { ReplayAuditLogDeliveriesResponse } from "@orq-ai/node/models/components";

let value: ReplayAuditLogDeliveriesResponse = {
  replayId: "<id>",
  queued: 184704,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `replayId`                                  | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `queued`                                    | *number*                                    | :heavy_check_mark:                          | Number of deliveries queued by this replay. |