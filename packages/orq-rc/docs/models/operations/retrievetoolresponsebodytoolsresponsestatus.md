# RetrieveToolResponseBodyToolsResponseStatus

The status of the tool. `Live` is the latest version of the tool. `Draft` is a version that is not yet published. `Pending` is a version that is pending approval. `Published` is a version that was live and has been replaced by a new version.

## Example Usage

```typescript
import { RetrieveToolResponseBodyToolsResponseStatus } from "@orq-ai/node/models/operations";

let value: RetrieveToolResponseBodyToolsResponseStatus = "published";
```

## Values

```typescript
"live" | "draft" | "pending" | "published"
```