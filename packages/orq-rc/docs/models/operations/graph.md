# Graph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import { Graph } from "@orq-ai/node/models/operations";

let value: Graph = {
  nodes: [],
  edges: [
    {
      source: "<value>",
      target: "<value>",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `nodes`                                                | [operations.Nodes](../../models/operations/nodes.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `edges`                                                | [operations.Edges](../../models/operations/edges.md)[] | :heavy_check_mark:                                     | N/A                                                    |