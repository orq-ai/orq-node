# DatapointInput

Datapoint content submitted by the caller.

## Example Usage

```typescript
import { DatapointInput } from "@orq-ai/node/models/components";

let value: DatapointInput = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `inputs`                                                                           | [components.DatapointInputInputs](../../models/components/datapointinputinputs.md) | :heavy_minus_sign:                                                                 | Structured variables passed to the prompt or workflow.                             |
| `messages`                                                                         | *any*[]                                                                            | :heavy_minus_sign:                                                                 | A JSON array containing dynamically typed values.                                  |
| `expectedOutput`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | Reference output expected for this datapoint.                                      |