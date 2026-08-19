# UpdateKnowledgeRequest

## Example Usage

```typescript
import { UpdateKnowledgeRequest } from "@orq-ai/node/models/operations";

let value: UpdateKnowledgeRequest = {
  knowledgeId: "<id>",
  knowledgeBasesServiceUpdateRequest: {
    path: "Default",
    type: "internal",
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `knowledgeId`                                   | *string*                                        | :heavy_check_mark:                              | N/A                                             |
| `knowledgeBasesServiceUpdateRequest`            | *components.KnowledgeBasesServiceUpdateRequest* | :heavy_check_mark:                              | N/A                                             |