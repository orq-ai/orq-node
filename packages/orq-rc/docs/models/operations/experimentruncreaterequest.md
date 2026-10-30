# ExperimentRunCreateRequest

## Example Usage

```typescript
import { ExperimentRunCreateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunCreateRequest = {
  experimentId: "<id>",
  createRunRequest: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `experimentId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `createRunRequest`                                                         | [components.CreateRunRequest](../../models/components/createrunrequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |