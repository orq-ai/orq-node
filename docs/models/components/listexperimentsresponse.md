# ListExperimentsResponse

## Example Usage

```typescript
import { ListExperimentsResponse } from "@orq-ai/node/models/components";

let value: ListExperimentsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [components.Experiment](../../models/components/experiment.md)[]              | :heavy_minus_sign:                                                            | Page of experiments, newest first.                                            |
| `hasMore`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether more experiments are available in the selected pagination<br/> direction. |