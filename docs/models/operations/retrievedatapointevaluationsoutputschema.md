# RetrieveDatapointEvaluationsOutputSchema

The expected shape of the value. Derived from the human review type, or inherited from the parent annotation for corrections.

## Example Usage

```typescript
import { RetrieveDatapointEvaluationsOutputSchema } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointEvaluationsOutputSchema = "categorical";
```

## Values

```typescript
"boolean" | "number" | "categorical" | "string"
```