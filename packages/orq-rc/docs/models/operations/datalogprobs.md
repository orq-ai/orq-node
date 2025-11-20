# DataLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { DataLogprobs } from "@orq-ai/node/models/operations";

let value: DataLogprobs = {
  content: [],
  refusal: [
    {
      token: "<value>",
      logprob: 6057.44,
      bytes: [
        3203.16,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6381.15,
          bytes: [
            2286.78,
            2100.23,
            7487.74,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `content`                                                                                | [operations.StreamAgentDataContent](../../models/operations/streamagentdatacontent.md)[] | :heavy_check_mark:                                                                       | A list of message content tokens with log probability information.                       |
| `refusal`                                                                                | [operations.DataRefusal](../../models/operations/datarefusal.md)[]                       | :heavy_check_mark:                                                                       | A list of message refusal tokens with log probability information.                       |