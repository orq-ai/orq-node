# Results2

## Example Usage

```typescript
import { Results2 } from "@orq-ai/node/models/operations";

let value: Results2 = {
  categories: {
    sexual: false,
    hateAndDiscrimination: true,
    violenceAndThreats: false,
    dangerousAndCriminalContent: false,
    selfharm: false,
    health: true,
    financial: true,
    law: true,
    pii: true,
  },
  categoryScores: {
    sexual: 1238.4,
    hateAndDiscrimination: 4169.79,
    violenceAndThreats: 1277.85,
    dangerousAndCriminalContent: 2650.45,
    selfharm: 7388.8,
    health: 1561.83,
    financial: 7808.48,
    law: 5104.39,
    pii: 6856.4,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `categories`                                                                         | [operations.ResultsCategories](../../models/operations/resultscategories.md)         | :heavy_check_mark:                                                                   | A list of the categories, and whether they are flagged or not                        |
| `categoryScores`                                                                     | [operations.ResultsCategoryScores](../../models/operations/resultscategoryscores.md) | :heavy_check_mark:                                                                   | A list of the categories along with their scores as predicted by model               |