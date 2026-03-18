# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody

Annotation queue item retrieved.


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody1`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody1 = {
    traceId: "<id>",
    type: "span.generic",
    input: {
      "key": "<value>",
    },
    output: {
      "key": "<value>",
      "key1": "<value>",
    },
  };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody2`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody2 = {
    traceId: "<id>",
    attributes: {},
    type: "span.chat_completion",
    input: {
      messages: [],
      model: "Ranchero",
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
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
      stream: false,
    },
    output: {
      id: "<id>",
      choices: [
        {
          finishReason: "content_filter",
          message: {},
        },
      ],
      created: 2545.49,
      model: "Camaro",
      object: "chat.completion",
    },
  };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody3`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody3 = {
    traceId: "<id>",
    attributes: {},
    type: "span.completion",
    input: {
      model: "Taurus",
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
        models: [],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
    output: {
      id: "<id>",
      choices: [],
      model: "Golf",
      object: "<value>",
    },
  };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody4`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody4 = {
    traceId: "<id>",
    attributes: {},
    type: "span.embedding",
    input: {
      input: "<value>",
      model: "Roadster",
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
      data: [],
      model: "Expedition",
      usage: {
        promptTokens: 5077.06,
        totalTokens: 8561.95,
      },
    },
  };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody5`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody5 = {
    traceId: "<id>",
    attributes: {},
    type: "span.create_image",
    input: {
      prompt: "<value>",
      model: "CX-9",
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
      created: 7218.57,
      data: [],
    },
  };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody6`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody6 = {
    traceId: "<id>",
    attributes: {},
    type: "span.create_image_edit",
    input: {
      model: "Aventador",
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
      created: 9967.5,
      data: [],
    },
  };
```

### `operations.ResponseBody7`

```typescript
const value: operations.ResponseBody7 = {
  traceId: "<id>",
  attributes: {},
  type: "span.create_image_variation",
  input: {
    model: "Expedition",
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
    created: 4700.73,
    data: [
      {},
    ],
  },
};
```

### `operations.ResponseBody8`

```typescript
const value: operations.ResponseBody8 = {
  traceId: "<id>",
  attributes: {},
  type: "span.moderation",
  input: {
    input: "<value>",
    model: "Focus",
  },
  output: {
    id: "<id>",
    model: "Countach",
    results: [
      {
        categories: {
          sexual: false,
          hateAndDiscrimination: true,
          violenceAndThreats: false,
          dangerousAndCriminalContent: false,
          selfharm: false,
          health: false,
          financial: false,
          law: false,
          pii: true,
        },
        categoryScores: {
          sexual: 9745,
          hateAndDiscrimination: 7234.13,
          violenceAndThreats: 9922.12,
          dangerousAndCriminalContent: 8779.97,
          selfharm: 9878.28,
          health: 9782.73,
          financial: 3886.74,
          law: 5000.59,
          pii: 9756.74,
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
        index: 9661.38,
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
          index: 6480.61,
          relevanceScore: 7365.56,
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
      models: [],
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
        role: "expected_output",
        content: "<value>",
      },
    ],
    variables: [
      {
        key: "<key>",
      },
    ],
  },
  output: {
    "key": "<value>",
  },
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
        index: 9337.78,
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
      stream: false,
      model: "A4",
      modelDbId: "23b9f7d2-00b3-4ce5-8bf9-0cb832d1aaa2",
      modelType: "chat",
      modelParameters: {},
      provider: "anthropic",
      messages: [],
    },
    extraParams: {
      product: "experiments",
      relatedEntities: [],
      projectId: "<id>",
      fallbacks: [
        {
          stream: true,
          model: "Land Cruiser",
          modelDbId: "35bb17ae-dba0-4eee-a99f-2ea79f449752",
          modelType: "ocr",
          modelParameters: {},
          provider: "orq",
          messages: [],
        },
      ],
    },
    workspaceId: "99dd309c-e34b-4e07-815c-f6226cd52124",
  },
  output: [
    {
      index: 9383.83,
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
  type: "span.responses",
  input: {
    model: "Jetta",
    input: "<value>",
    stream: false,
  },
  output: {
    id: "<id>",
    object: "response",
    createdAt: 7411.53,
    status: "incomplete",
    error: {
      code: "<value>",
      message: "<value>",
    },
    incompleteDetails: null,
    model: "Accord",
    output: [
      {
        id: "<id>",
        type: "web_search_call",
        status: "completed",
      },
    ],
    parallelToolCalls: true,
  },
};
```

### `operations.ThirtyOne`

```typescript
const value: operations.ThirtyOne = {
  traceId: "<id>",
  attributes: {},
  type: "span.fallback_selected",
};
```

### `operations.ThirtyTwo`

```typescript
const value: operations.ThirtyTwo = {
  traceId: "<id>",
  attributes: {},
  type: "span.retry",
};
```

### `operations.ThirtyThree`

```typescript
const value: operations.ThirtyThree = {
  traceId: "<id>",
  attributes: {},
  type: "span.load_balancer",
  input: {
    originalModel: "<value>",
    config: {
      type: "weight_based",
      models: [],
    },
  },
  output: {
    selectedModel: "<value>",
    selectedWeight: 5339.64,
  },
};
```

### `operations.ThirtyFour`

```typescript
const value: operations.ThirtyFour = {
  traceId: "<id>",
  attributes: {},
  type: "span.auto_router",
  input: {
    strongModel: "<value>",
    economicalModel: "<value>",
  },
  output: {
    selectedModel: "<value>",
    isStrongRecommended: true,
  },
};
```

