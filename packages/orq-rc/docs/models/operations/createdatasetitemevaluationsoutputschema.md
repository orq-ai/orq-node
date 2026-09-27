# CreateDatasetItemEvaluationsOutputSchema

The expected shape of the value. Derived from the human review type, or inherited from the parent annotation for corrections.

## Example Usage

```typescript
import { CreateDatasetItemEvaluationsOutputSchema } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemEvaluationsOutputSchema = "number";
```

## Values

```typescript
"boolean" | "number" | "categorical" | "string"
```