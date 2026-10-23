# EvaluatorCallTimeout

## Example Usage

```typescript
import { EvaluatorCallTimeout } from "@orq-ai/node/models/components";

let value: EvaluatorCallTimeout = {};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callTimeout`                                                                                                                                                               | *number*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | Maximum milliseconds per provider attempt (or execution for non-LLM evaluators).<br/> Omitted uses the server default (120000). The server caps each invocation at ten minutes. |