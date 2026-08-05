# RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponseAnnotator

The annotator that produced this evaluation. For workflow evals: { kind: llm | code, actor_id: eval span id }.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponseAnnotator } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponseAnnotator = {
    kind: "llm",
    actorId: "<id>",
  };
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponseKind](../../models/operations/retrieveannotationqueueitemevaluationsannotationqueuesresponsekind.md) | :heavy_check_mark:                                                                                                                                                             | The kind of annotator that produced the evaluation                                                                                                                             |
| `actorId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Who/what produced this annotation. User/contact id for human, evaluator eval span id for llm/code, automation rule id for automation.                                          |