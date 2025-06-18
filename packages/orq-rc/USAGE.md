<!-- Start SDK Example Usage [usage] -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "user_12345",
    displayName: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://example.com/avatars/jane-smith.jpg",
    tags: [
      "premium",
      "beta-user",
      "enterprise",
    ],
    metadata: {
      "department": "Engineering",
      "role": "Senior Developer",
      "subscription_tier": "premium",
      "last_login": "2024-01-15T10:30:00Z",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->