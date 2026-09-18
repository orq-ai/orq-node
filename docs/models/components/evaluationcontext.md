# EvaluationContext

The data to grade. When `messages` is present it is the conversation and
 `input.user_query` is ignored; `output.response` is appended only when the
 conversation carries no assistant turn. Mirrors graders-api buildGraderRequest.

## Example Usage

```typescript
import { EvaluationContext } from "@orq-ai/node/models/components";

let value: EvaluationContext = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `messages`                                                                                                                    | [components.EvaluationContextMessages](../../models/components/evaluationcontextmessages.md)[]                                | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `input`                                                                                                                       | [components.StructuredInput](../../models/components/structuredinput.md)                                                      | :heavy_minus_sign:                                                                                                            | StructuredInput names its fields after the template variables they feed, so<br/> input.user_query in a prompt is user_query here. |
| `output`                                                                                                                      | [components.StructuredOutput](../../models/components/structuredoutput.md)                                                    | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `variables`                                                                                                                   | Record<string, *any*>                                                                                                         | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |