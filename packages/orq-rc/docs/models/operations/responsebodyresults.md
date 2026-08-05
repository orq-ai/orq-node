# ResponseBodyResults


## Supported Types

### `operations.RetrieveAnnotationQueueItemResults1`

```typescript
const value: operations.RetrieveAnnotationQueueItemResults1 = {
  flagged: true,
  categories: {
    hate: false,
    hateThreatening: false,
    harassment: true,
    harassmentThreatening: false,
    illicit: false,
    illicitViolent: false,
    selfHarm: true,
    selfHarmIntent: false,
    selfHarmInstructions: true,
    sexual: false,
    sexualMinors: false,
    violence: true,
    violenceGraphic: true,
  },
  categoryScores: {
    hate: 4854.04,
    hateThreatening: 947.32,
    harassment: 16.25,
    harassmentThreatening: 5921.83,
    illicit: 3309.38,
    illicitViolent: 3026.74,
    selfHarm: 2962.64,
    selfHarmIntent: 3911.59,
    selfHarmInstructions: 5009.33,
    sexual: 3302.78,
    sexualMinors: 9454.84,
    violence: 1966.04,
    violenceGraphic: 6948.5,
  },
};
```

### `operations.RetrieveAnnotationQueueItemResults2`

```typescript
const value: operations.RetrieveAnnotationQueueItemResults2 = {
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
    sexual: 1768.25,
    hateAndDiscrimination: 9933.18,
    violenceAndThreats: 9773.72,
    dangerousAndCriminalContent: 2534.91,
    selfharm: 9268.11,
    health: 9018.97,
    financial: 1536.66,
    law: 5322.7,
    pii: 1923.25,
  },
};
```

