# RequestBodyStatus

The status of the tool. `Live` is the latest version of the tool. `Draft` is a version that is not yet published. `Pending` is a version that is pending approval. `Published` is a version that was live and has been replaced by a new version.

## Example Usage

```typescript
import { RequestBodyStatus } from "@orq-ai/node/models/operations";

let value: RequestBodyStatus = "live";
```

## Values

```typescript
"live" | "draft" | "pending" | "published"
```