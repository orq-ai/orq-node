# ResponseBodyGraph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import { ResponseBodyGraph } from "@orq-ai/node/models/operations";

let value: ResponseBodyGraph = {
  nodes: [],
  edges: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `nodes`                                                                        | [operations.ResponseBodyNodes](../../models/operations/responsebodynodes.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `edges`                                                                        | [operations.ResponseBodyEdges](../../models/operations/responsebodyedges.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |