# DeploymentGetLogsEvalsDeploymentsEvals


## Supported Types

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson1`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson1 = {
    type: "string",
    id: "<id>",
    status: "failed",
    startedAt: "<value>",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evaluatorType: "output_evaluator",
  };
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson2`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson2 = {
    type: "number",
    value: 5030.1,
    id: "<id>",
    status: "completed",
    startedAt: "<value>",
    relatedEntities: [
      {
        type: "contact",
        contactId: "<id>",
      },
    ],
    evaluatorType: "input_guardrail",
  };
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson3`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson3 = {
    type: "boolean",
    value: false,
    id: "<id>",
    status: "failed",
    startedAt: "<value>",
    relatedEntities: [
      {
        type: "account",
        accountId: "696a0d14-401d-4cbb-b140-003003c0fada",
      },
    ],
    evaluatorType: "output_evaluator",
  };
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson4`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJson4 = {
    type: "string_array",
    values: [
      "<value>",
    ],
    id: "<id>",
    status: "pending",
    startedAt: "<value>",
    relatedEntities: [
      {
        type: "human_eval",
        humanEvalId: "<id>",
      },
    ],
    evaluatorType: "input_guardrail",
  };
```

