# GetEvaluatorVersionResponse

A dedicated message (not a reuse of EvaluatorDocumentResponse): the field
 carries a version-activity envelope, not an evaluator document.

## Example Usage

```typescript
import { GetEvaluatorVersionResponse } from "@orq-ai/node/models/components";

let value: GetEvaluatorVersionResponse = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                       | [components.GetEvaluatorVersionResponseDocument](../../models/components/getevaluatorversionresponsedocument.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |