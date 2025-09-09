<!-- Start SDK Example Usage [usage] -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  await orq.postV2AgentsInternal({
    path: "Default",
    key: "<key>",
    description: "qua hm over irk",
    instructions: "<value>",
    model: "Model S",
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->