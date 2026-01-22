# Results


## Supported Types

### `operations.Results1`

```typescript
const value: operations.Results1 = {
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

### `operations.Results2`

```typescript
const value: operations.Results2 = {
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

