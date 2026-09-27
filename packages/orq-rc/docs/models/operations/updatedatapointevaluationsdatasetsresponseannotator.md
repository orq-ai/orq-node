# UpdateDatapointEvaluationsDatasetsResponseAnnotator

The annotator that produced this evaluation. Optional during the dual-write deprecation window.

## Example Usage

```typescript
import { UpdateDatapointEvaluationsDatasetsResponseAnnotator } from "@orq-ai/node/models/operations";

let value: UpdateDatapointEvaluationsDatasetsResponseAnnotator = {
  kind: "human",
  actorId: "<id>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                 | [operations.UpdateDatapointEvaluationsDatasetsResponseKind](../../models/operations/updatedatapointevaluationsdatasetsresponsekind.md) | :heavy_check_mark:                                                                                                                     | The kind of annotator that produced the evaluation                                                                                     |
| `actorId`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Who/what produced this annotation. User/contact id for human, evaluator eval span id for llm/code, automation rule id for automation.  |