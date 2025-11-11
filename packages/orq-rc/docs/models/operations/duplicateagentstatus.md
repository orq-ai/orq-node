# DuplicateAgentStatus

The status of the agent. `Live` is the latest version of the agent. `Draft` is a version that is not yet published. `Pending` is a version that is pending approval. `Published` is a version that was live and has been replaced by a new version.

## Example Usage

```typescript
import { DuplicateAgentStatus } from "@orq-ai/node/models/operations";

let value: DuplicateAgentStatus = "pending";
```

## Values

```typescript
"live" | "draft" | "pending" | "published"
```