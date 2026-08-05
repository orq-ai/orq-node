# ResponseBodyTrace

Trace-specific metadata

## Example Usage

```typescript
import { ResponseBodyTrace } from "@orq-ai/node/models/operations";

let value: ResponseBodyTrace = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `framework`                                                                                                 | [operations.ResponseBodyFramework](../../models/operations/responsebodyframework.md)                        | :heavy_minus_sign:                                                                                          | Framework or platform that generated the trace                                                              |
| `graph`                                                                                                     | [operations.ResponseBodyGraph](../../models/operations/responsebodygraph.md)                                | :heavy_minus_sign:                                                                                          | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces. |