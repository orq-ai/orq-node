# FactoryBudgetScope

Per-factory cap. Matches requests whose api key carries the label
 `factory=<factory_id>` (keys minted for agent sessions of that factory).

## Example Usage

```typescript
import { FactoryBudgetScope } from "@orq-ai/node/models/components";

let value: FactoryBudgetScope = {
  factoryId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `factoryId`        | *string*           | :heavy_check_mark: | N/A                |