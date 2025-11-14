# SyncMcpToolResponseBodyToolsStatus

The status of the tool. `Live` is the latest version of the tool. `Draft` is a version that is not yet published. `Pending` is a version that is pending approval. `Published` is a version that was live and has been replaced by a new version.

## Example Usage

```typescript
import { SyncMcpToolResponseBodyToolsStatus } from "@orq-ai/node/models/operations";

let value: SyncMcpToolResponseBodyToolsStatus = "live";
```

## Values

```typescript
"live" | "draft" | "pending" | "published"
```