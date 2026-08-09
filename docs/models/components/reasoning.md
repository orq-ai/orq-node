# Reasoning

## Example Usage

```typescript
import { Reasoning } from "@orq-ai/node/models/components";

let value: Reasoning = {};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `effort`                                                                                                                                                        | [components.ReasoningEffort1](../../models/components/reasoningeffort1.md)                                                                                      | :heavy_minus_sign:                                                                                                                                              | Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response. |
| `summary`                                                                                                                                                       | [components.ReasoningSummary](../../models/components/reasoningsummary.md)                                                                                      | :heavy_minus_sign:                                                                                                                                              | The format of the reasoning summary returned by the model.                                                                                                      |