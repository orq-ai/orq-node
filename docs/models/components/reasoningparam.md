# ReasoningParam

## Example Usage

```typescript
import { ReasoningParam } from "@orq-ai/node/models/components";

let value: ReasoningParam = {};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `effort`                                                                                                                                                        | [components.Effort](../../models/components/effort.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                              | Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response. |
| `summary`                                                                                                                                                       | [components.Summary](../../models/components/summary.md)                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The format of the reasoning summary returned by the model.                                                                                                      |