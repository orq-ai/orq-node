# ExecuteConstraints

Limits for one execution, saved into the run's settings.

## Example Usage

```typescript
import { ExecuteConstraints } from "@orq-ai/node/models/components";

let value: ExecuteConstraints = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `llm`                                                                  | [components.LlmConstraints](../../models/components/llmconstraints.md) | :heavy_minus_sign:                                                     | Limits for prompt and agent cells.                                     |