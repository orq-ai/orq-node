# CreateClassifyResponseBody

Returns one answer per question.

## Example Usage

```typescript
import { CreateClassifyResponseBody } from "@orq-ai/node/models/operations";

let value: CreateClassifyResponseBody = {
  answers: {
    "key": {
      type: "score",
    },
  },
  model: "Silverado",
  usage: {
    inputTokens: 979305,
    outputTokens: 938729,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `answers`                                                                              | Record<string, [components.ClassifyAnswer](../../models/components/classifyanswer.md)> | :heavy_check_mark:                                                                     | Answers keyed by the question identifiers from the request.                            |
| `model`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The model that served the request, for example typesafe/jev-latest.                    |
| `usage`                                                                                | [components.ClassifyUsage](../../models/components/classifyusage.md)                   | :heavy_check_mark:                                                                     | N/A                                                                                    |