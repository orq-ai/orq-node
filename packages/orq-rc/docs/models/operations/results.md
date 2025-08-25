# Results

## Example Usage

```typescript
import { Results } from "@orq-ai/node/models/operations";

let value: Results = {
  flagged: false,
  categories: {
    hate: false,
    hateThreatening: false,
    harassment: true,
    harassmentThreatening: false,
    illicit: true,
    illicitViolent: true,
    selfHarm: true,
    selfHarmIntent: true,
    selfHarmInstructions: false,
    sexual: false,
    sexualMinors: true,
    violence: false,
    violenceGraphic: true,
  },
  categoryScores: {
    hate: 5700.34,
    hateThreatening: 1510.76,
    harassment: 7613.37,
    harassmentThreatening: 9847.55,
    illicit: 7910.33,
    illicitViolent: 5907.09,
    selfHarm: 182.72,
    selfHarmIntent: 1076.25,
    selfHarmInstructions: 6722.18,
    sexual: 5038.25,
    sexualMinors: 2765.99,
    violence: 2925.33,
    violenceGraphic: 4334.15,
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