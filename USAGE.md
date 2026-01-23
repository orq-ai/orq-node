<!-- Start SDK Example Usage [usage] -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.feedback.create({
    field: "rating",
    value: [
      "good",
    ],
    traceId: "67HTZ65Z9W91HSF51CW68KK1QH",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->