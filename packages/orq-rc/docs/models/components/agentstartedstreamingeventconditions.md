# AgentStartedStreamingEventConditions

## Example Usage

```typescript
import { AgentStartedStreamingEventConditions } from "@orq-ai/node/models/components";

let value: AgentStartedStreamingEventConditions = {
  condition: "<value>",
  operator: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `condition`                               | *string*                                  | :heavy_check_mark:                        | The argument of the tool call to evaluate |
| `operator`                                | *string*                                  | :heavy_check_mark:                        | The operator to use                       |
| `value`                                   | *string*                                  | :heavy_check_mark:                        | The value to compare against              |