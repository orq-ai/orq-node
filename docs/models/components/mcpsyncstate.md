# McpSyncState

## Example Usage

```typescript
import { McpSyncState } from "@orq-ai/node/models/components";

let value: McpSyncState = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `status`                                                         | [components.SyncStatus](../../models/components/syncstatus.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `toolsTotal`                                                     | *number*                                                         | :heavy_minus_sign:                                               | Tools in the catalog after the last sync.                        |
| `toolsAdded`                                                     | *number*                                                         | :heavy_minus_sign:                                               | Tools the last sync discovered for the first time.               |
| `toolsRemoved`                                                   | *number*                                                         | :heavy_minus_sign:                                               | Tools the last sync no longer found upstream and marked MISSING. |
| `lastSyncedAt`                                                   | *string*                                                         | :heavy_minus_sign:                                               | ISO 8601 timestamp of the last sync attempt.                     |
| `errors`                                                         | *string*[]                                                       | :heavy_minus_sign:                                               | Failures reported by the last sync.                              |