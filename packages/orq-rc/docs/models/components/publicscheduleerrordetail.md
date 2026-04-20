# PublicScheduleErrorDetail

## Example Usage

```typescript
import { PublicScheduleErrorDetail } from "@orq-ai/node/models/components";

let value: PublicScheduleErrorDetail = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Stable error code, e.g. invalid_expression, schedule_not_found, agent_not_found. |
| `message`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Human-readable error description.                                                |