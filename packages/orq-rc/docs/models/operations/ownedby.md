# OwnedBy

Describe the provider of the model. Every model with `vendor` is publicly available, while models with `workspace` are private.

## Example Usage

```typescript
import { OwnedBy } from "@orq-ai/node/models/operations";

let value: OwnedBy = "workspace";
```

## Values

```typescript
"vendor" | "workspace"
```