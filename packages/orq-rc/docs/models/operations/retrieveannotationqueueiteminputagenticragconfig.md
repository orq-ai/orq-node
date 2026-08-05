# RetrieveAnnotationQueueItemInputAgenticRagConfig

Override the agentic RAG configuration for this search. If not provided, will use the knowledge base configured agentic RAG settings.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemInputAgenticRagConfig } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemInputAgenticRagConfig = {
  model: "Ranchero",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The name of the model for the Agent to use. Refer to the [model list](https://docs.orq.ai/docs/proxy#/chat-models). |