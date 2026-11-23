# UpdateRunRequest

## Example Usage

```typescript
import { UpdateRunRequest } from "@orq-ai/node/models/components";

let value: UpdateRunRequest = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                          | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | New run name. Must not be empty.                                                                                                               |
| `settings`                                                                                                                                     | [components.RunSettings](../../models/components/runsettings.md)                                                                               | :heavy_minus_sign:                                                                                                                             | Settings to change. `concurrency`, `timeout` and `max_turns` change only<br/> when set. `hidden_column_ids` is replaced, and cleared when omitted. |