<!-- Start SDK Example Usage [usage] -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.invoke({
    key: "<key>",
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    documents: [
      {
        text:
          "The refund policy allows customers to return items within 30 days of purchase for a full refund.",
        metadata: {
          fileName: "refund_policy.pdf",
          fileType: "application/pdf",
          pageNumber: 1,
        },
      },
      {
        text: "Premium members receive free shipping on all orders over $50.",
        metadata: {
          fileName: "membership_benefits.md",
          fileType: "text/markdown",
        },
      },
    ],
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->