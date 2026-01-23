# Results1

## Example Usage

```typescript
import { Results1 } from "@orq-ai/node/models/operations";

let value: Results1 = {
  flagged: true,
  categories: {
    hate: false,
    hateThreatening: true,
    harassment: true,
    harassmentThreatening: true,
    illicit: true,
    illicitViolent: false,
    selfHarm: true,
    selfHarmIntent: false,
    selfHarmInstructions: true,
    sexual: false,
    sexualMinors: false,
    violence: false,
    violenceGraphic: false,
  },
  categoryScores: {
    hate: 4408.67,
    hateThreatening: 4675.16,
    harassment: 5468.62,
    harassmentThreatening: 2668.57,
    illicit: 2569.05,
    illicitViolent: 6312.37,
    selfHarm: 8211.98,
    selfHarmIntent: 7537.21,
    selfHarmInstructions: 6848.35,
    sexual: 7554.49,
    sexualMinors: 2682.79,
    violence: 1965.73,
    violenceGraphic: 7029.57,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `flagged`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether any of the categories are flagged                                                    |
| `categories`                                                                                 | [operations.Categories](../../models/operations/categories.md)                               | :heavy_check_mark:                                                                           | A list of the categories, and whether they are flagged or not                                |
| `categoryScores`                                                                             | [operations.CategoryScores](../../models/operations/categoryscores.md)                       | :heavy_check_mark:                                                                           | A list of the categories along with their scores as predicted by model                       |
| `categoryAppliedInputTypes`                                                                  | [operations.CategoryAppliedInputTypes](../../models/operations/categoryappliedinputtypes.md) | :heavy_minus_sign:                                                                           | A list of the categories along with the input type(s) that the score applies to              |