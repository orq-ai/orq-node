# ArtifactRefs

References read from the cell's value.

## Example Usage

```typescript
import { ArtifactRefs } from "@orq-ai/node/models/components";

let value: ArtifactRefs = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `traceId`                                       | *string*                                        | :heavy_minus_sign:                              | Trace of the execution that produced the value. |
| `responseId`                                    | *string*                                        | :heavy_minus_sign:                              | Response produced by a prompt or agent cell.    |