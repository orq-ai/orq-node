# IdentityBudgetScope

Per-identity cap. Keyed by the contact's external identifier so the
 scope is stable across imports.

## Example Usage

```typescript
import { IdentityBudgetScope } from "@orq-ai/node/models/components";

let value: IdentityBudgetScope = {};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `identityExternalId` | *string*             | :heavy_minus_sign:   | N/A                  |