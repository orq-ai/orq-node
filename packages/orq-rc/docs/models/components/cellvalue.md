# CellValue

Stored documents are returned as-is; strings are wrapped as {"text"},
 arrays as {"messages"} on messages cells and {"items"} elsewhere, other
 scalars as {"value"}.

## Example Usage

```typescript
import { CellValue } from "@orq-ai/node/models/components";

let value: CellValue = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |