# LlmConstraints

Limits for prompt and agent cells, saved into the run's settings.

## Example Usage

```typescript
import { LlmConstraints } from "@orq-ai/node/models/components";

let value: LlmConstraints = {};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxTurns`                                                                                                                                               | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Maximum number of model calls in a cell's agent loop.                                                                                                    |
| `timeout`                                                                                                                                                | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Wall-clock limit for each cell, as a duration string such as `90s`. Must<br/> not be shorter than the timeout of any agent used by the run's agent<br/> columns. |
| `concurrency`                                                                                                                                            | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Maximum number of cells executing at the same time, 1 to 100.                                                                                            |