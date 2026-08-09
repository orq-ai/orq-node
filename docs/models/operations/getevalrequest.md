# GetEvalRequest

## Example Usage

```typescript
import { GetEvalRequest } from "@orq-ai/node/models/operations";

let value: GetEvalRequest = {
  id: "01JMDPA3QW5C1V0NJ1PW34T4E5",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Unique identifier of the evaluator, as returned in the `_id` field by `GET /v2/evaluators`. | 01JMDPA3QW5C1V0NJ1PW34T4E5                                                                  |