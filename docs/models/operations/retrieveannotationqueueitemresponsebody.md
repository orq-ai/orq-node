# RetrieveAnnotationQueueItemResponseBody

Annotation queue item retrieved.


## Supported Types

### `operations.RetrieveAnnotationQueueItemResponseBody1`

```typescript
const value: operations.RetrieveAnnotationQueueItemResponseBody1 = {
  traceId: "<id>",
  type: "span.generic",
  input: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  output: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.RetrieveAnnotationQueueItemResponseBody2`

```typescript
const value: operations.RetrieveAnnotationQueueItemResponseBody2 = {
  traceId: "<id>",
  attributes: {},
  type: "span.chat_completion",
  input: {
    messages: [],
    model: "Grand Cherokee",
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    retry: {
      count: 3,
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
        {
          model: "anthropic/claude-3-5-sonnet",
          weight: 0.3,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    stream: true,
  },
  output: {
    id: "<id>",
    choices: [],
    created: 5597.93,
    model: "Jetta",
    object: "chat.completion",
  },
};
```

### `operations.ResponseBody3`

```typescript
const value: operations.ResponseBody3 = {
  traceId: "<id>",
  attributes: {},
  type: "span.completion",
  input: {
    model: "Roadster",
    prompt: "<value>",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
  },
  output: {
    id: "<id>",
    choices: [],
    model: "Roadster",
    object: "<value>",
  },
};
```

### `operations.ResponseBody4`

```typescript
const value: operations.ResponseBody4 = {
  traceId: "<id>",
  attributes: {},
  type: "span.embedding",
  input: {
    input: "<value>",
    model: "Spyder",
    fallbacks: [
      {
        model: "openai/text-embedding-3-small",
      },
    ],
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
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
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: {
    object: "list",
    data: [
      {
        object: "embedding",
        embedding: [
          1329.03,
          3595.72,
          1986,
        ],
        index: 7875.54,
      },
    ],
    model: "El Camino",
    usage: {
      promptTokens: 9306.97,
      totalTokens: 2509.06,
    },
  },
};
```

### `operations.Five`

```typescript
const value: operations.Five = {
  traceId: "<id>",
  attributes: {},
  type: "span.create_image",
  input: {
    prompt: "<value>",
    model: "Wrangler",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
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
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: {
    created: 5292.97,
    data: [
      {},
    ],
  },
};
```

### `operations.Six`

```typescript
const value: operations.Six = {
  traceId: "<id>",
  attributes: {},
  type: "span.create_image_edit",
  input: {
    model: "XTS",
    prompt: "<value>",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      prompt: {
        id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        version: "latest",
      },
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
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: {
    created: 4866.53,
    data: [
      {},
    ],
  },
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  traceId: "<id>",
  attributes: {},
  type: "span.create_image_variation",
  input: {
    model: "Land Cruiser",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      prompt: {
        id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        version: "latest",
      },
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
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: {
    created: 1624.9,
    data: [],
  },
};
```

### `operations.Eight`

```typescript
const value: operations.Eight = {
  traceId: "<id>",
  attributes: {},
  type: "span.moderation",
  input: {
    input: [
      "<value 1>",
    ],
    model: "CTS",
  },
  output: {
    id: "<id>",
    model: "Focus",
    results: [
      {
        categories: {
          sexual: false,
          hateAndDiscrimination: true,
          violenceAndThreats: false,
          dangerousAndCriminalContent: false,
          selfharm: false,
          health: true,
          financial: true,
          law: true,
          pii: true,
        },
        categoryScores: {
          sexual: 1768.25,
          hateAndDiscrimination: 9933.18,
          violenceAndThreats: 9773.72,
          dangerousAndCriminalContent: 2534.91,
          selfharm: 9268.11,
          health: 9018.97,
          financial: 1536.66,
          law: 5322.7,
          pii: 1923.25,
        },
      },
    ],
  },
};
```

### `operations.Nine`

```typescript
const value: operations.Nine = {
  traceId: "<id>",
  attributes: {},
  type: "span.ocr",
  input: {
    model: "F-150",
    document: {
      type: "document_url",
      documentUrl: "https://frail-papa.com/",
    },
  },
  output: {
    model: "Alpine",
    pages: [
      {
        index: 8916.68,
        markdown: "<value>",
        images: [],
      },
    ],
    usage: {
      type: "tokens",
      tokensProcessed: 554049,
    },
  },
};
```

### `operations.Ten`

```typescript
const value: operations.Ten = {
  traceId: "<id>",
  attributes: {},
  type: "span.rerank",
  input: {
    query: "<value>",
    documents: [
      "<value 1>",
    ],
    model: "Volt",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
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
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: {
    response: {
      object: "list",
      results: [
        {
          object: "rerank",
          index: 4220.77,
          relevanceScore: 333.52,
        },
      ],
    },
  },
};
```

### `operations.Eleven`

```typescript
const value: operations.Eleven = {
  traceId: "<id>",
  attributes: {},
  type: "span.speech",
  input: {
    input: "<value>",
    model: "Altima",
    voice: "<value>",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
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
      thread: {
        id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        tags: [
          "customer-support",
          "priority-high",
        ],
      },
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: {
    url: "https://boiling-deck.org",
  },
};
```

### `operations.Twelve`

```typescript
const value: operations.Twelve = {
  traceId: "<id>",
  attributes: {},
  type: "span.transcription",
  input: {
    model: "Explorer",
    temperature: 0.5,
    timestampGranularities: [
      "word",
      "segment",
    ],
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
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
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: {
    text: "<value>",
  },
};
```

### `operations.Thirteen`

```typescript
const value: operations.Thirteen = {
  traceId: "<id>",
  attributes: {},
  type: "span.translation",
  input: {
    model: "Alpine",
    temperature: 0.5,
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
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
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  },
  output: "<value>",
};
```

### `operations.Fourteen`

```typescript
const value: operations.Fourteen = {
  traceId: "<id>",
  attributes: {},
  type: "block.llm_call",
  input: {
    messages: [],
    variables: [],
  },
  output: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.Fifteen`

```typescript
const value: operations.Fifteen = {
  traceId: "<id>",
  attributes: {},
  type: "span.evaluation_engine",
  input: {},
  output: {},
};
```

### `operations.Sixteen`

```typescript
const value: operations.Sixteen = {
  traceId: "<id>",
  attributes: {},
  type: "span.evaluator",
  input: {
    id: "<id>",
    evaluatorId: "<id>",
    evaluatorType: "input_guardrail",
    displayName: "Casimir_Ullrich",
    description: "obediently uh-huh catch",
  },
  output: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.Seventeen`

```typescript
const value: operations.Seventeen = {
  traceId: "<id>",
  attributes: {
    cacheConfig: {
      type: "exact",
      ttl: 3600,
    },
  },
  type: "span.cache_retrieval",
  input: {
    messages: [
      {
        role: "correction",
        content: "<value>",
      },
    ],
    variables: [],
  },
  output: {},
};
```

### `operations.Eighteen`

```typescript
const value: operations.Eighteen = {
  traceId: "<id>",
  attributes: {},
  type: "span.retrieval",
  input: {},
  output: {
    id: "<id>",
    documents: [
      {
        id: "<id>",
        text: "<value>",
        metadata: {
          datasourceId: "<id>",
          chunkId: "<id>",
          fileName: "example.file",
          fileType: "text",
        },
        score: 4059.11,
      },
    ],
  },
};
```

### `operations.Nineteen`

```typescript
const value: operations.Nineteen = {
  traceId: "<id>",
  type: "trace",
};
```

### `operations.Twenty`

```typescript
const value: operations.Twenty = {
  traceId: "<id>",
  attributes: {},
  type: "span.deployment",
  input: {
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
  },
  output: {
    choices: [
      {
        index: 324.03,
      },
    ],
  },
};
```

### `operations.TwentyOne`

```typescript
const value: operations.TwentyOne = {
  traceId: "<id>",
  attributes: {},
  type: "span.spreadsheet",
};
```

### `operations.TwentyTwo`

```typescript
const value: operations.TwentyTwo = {
  traceId: "<id>",
  attributes: {},
  type: "span.playground",
  input: {
    inputs: {
      "key": 354.4,
    },
    promptConfig: {
      stream: true,
      model: "Colorado",
      modelDbId: "<id>",
      modelType: "tts",
      modelParameters: {},
      provider: "minimax",
      messages: [
        {
          role: "expected_output",
          content: "<value>",
        },
      ],
    },
    extraParams: {
      product: "workflows",
      relatedEntities: [
        {
          type: "spreadsheet_sheet_row_cell",
          cellId: "<id>",
        },
      ],
      projectId: "<id>",
      fallbacks: [
        {
          stream: true,
          model: "Land Cruiser",
          modelDbId: "<id>",
          modelType: "completion",
          modelParameters: {},
          provider: "nvidia",
          messages: [
            {
              role: "expected_output",
              content: [],
            },
          ],
        },
      ],
    },
    workspaceId: "<id>",
  },
  output: [
    {
      index: 6224.3,
    },
  ],
};
```

### `operations.TwentyThree`

```typescript
const value: operations.TwentyThree = {
  traceId: "<id>",
  attributes: {},
  type: "span.query",
};
```

### `operations.TwentyFour`

```typescript
const value: operations.TwentyFour = {
  traceId: "<id>",
  attributes: {},
  type: "span.agent",
};
```

### `operations.TwentyFive`

```typescript
const value: operations.TwentyFive = {
  traceId: "<id>",
  attributes: {},
  type: "span.agent_execution",
};
```

### `operations.TwentySix`

```typescript
const value: operations.TwentySix = {
  traceId: "<id>",
  attributes: {},
  type: "span.agent_thought",
};
```

### `operations.TwentySeven`

```typescript
const value: operations.TwentySeven = {
  traceId: "<id>",
  attributes: {},
  type: "span.agent_action_review",
};
```

### `operations.TwentyEight`

```typescript
const value: operations.TwentyEight = {
  traceId: "<id>",
  attributes: {},
  type: "span.agent_execution_naming",
};
```

### `operations.TwentyNine`

```typescript
const value: operations.TwentyNine = {
  traceId: "<id>",
  attributes: {},
  type: "span.tool",
};
```

### `operations.Thirty`

```typescript
const value: operations.Thirty = {
  traceId: "<id>",
  attributes: {},
  type: "span.agent_tool_execution",
};
```

### `operations.ThirtyOne`

```typescript
const value: operations.ThirtyOne = {
  traceId: "<id>",
  attributes: {},
  type: "span.responses",
  input: {
    model: "Expedition",
    input: [],
    stream: false,
  },
  output: {
    id: "<id>",
    object: "response",
    createdAt: 9904.98,
    status: "cancelled",
    incompleteDetails: null,
    model: "911",
    output: [],
    parallelToolCalls: true,
  },
};
```

### `operations.ThirtyTwo`

```typescript
const value: operations.ThirtyTwo = {
  traceId: "<id>",
  attributes: {},
  type: "span.fallback_selected",
};
```

### `operations.ThirtyThree`

```typescript
const value: operations.ThirtyThree = {
  traceId: "<id>",
  attributes: {},
  type: "span.retry",
};
```

### `operations.ThirtyFour`

```typescript
const value: operations.ThirtyFour = {
  traceId: "<id>",
  attributes: {},
  type: "span.load_balancer",
  input: {
    originalModel: "<value>",
    config: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
  },
  output: {
    selectedModel: "<value>",
    selectedWeight: 1619.73,
  },
};
```

### `operations.ThirtyFive`

```typescript
const value: operations.ThirtyFive = {
  traceId: "<id>",
  attributes: {},
  type: "span.auto_router",
  input: {
    strongModel: "<value>",
    economicalModel: "<value>",
  },
  output: {
    selectedModel: "<value>",
  },
};
```

