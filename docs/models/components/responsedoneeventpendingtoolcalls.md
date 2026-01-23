# ResponseDoneEventPendingToolCalls

## Example Usage

```typescript
import { ResponseDoneEventPendingToolCalls } from "@orq-ai/node/models/components";

let value: ResponseDoneEventPendingToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identifier for the tool call                                                          |
| `type`                                                                                       | [components.ResponseDoneEventDataType](../../models/components/responsedoneeventdatatype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `function`                                                                                   | [components.ResponseDoneEventFunction](../../models/components/responsedoneeventfunction.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |