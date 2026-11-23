# CancelExperimentRunRequest

## Example Usage

```typescript
import { CancelExperimentRunRequest } from "@orq-ai/node/models/components";

let value: CancelExperimentRunRequest = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `rowIds`                                                                                                          | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | Rows whose queued and running cells are canceled. Empty cancels every row.<br/> The run moves to canceled either way. |