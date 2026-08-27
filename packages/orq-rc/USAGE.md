<!-- Start SDK Example Usage [usage] -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.list({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->