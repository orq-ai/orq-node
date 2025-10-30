# State

An action is a tool that an agent chooses to use. If executed is false, together with the output being there, it can indicate that a tool was mocked

## Example Usage

```typescript
import { State } from "@orq-ai/node/models/operations";

let value: State = {
  input: {},
  output: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `review`                                                                                     | [operations.Review](../../models/operations/review.md)                                       | :heavy_minus_sign:                                                                           | Review status of the tool call                                                               |
| `reviewSource`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | The source of the review, where it was approved or rejected                                  |
| `reviewedById`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | Only refers to an internal user of the platform, who approved or rejected the tool execution |
| `executed`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `error`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `input`                                                                                      | Record<string, *any*>                                                                        | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `output`                                                                                     | Record<string, *any*>                                                                        | :heavy_check_mark:                                                                           | N/A                                                                                          |