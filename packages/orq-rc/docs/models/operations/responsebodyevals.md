# ResponseBodyEvals


## Supported Types

### `operations.GetV2LogsIdEvals1`

```typescript
const value: operations.GetV2LogsIdEvals1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-06-24T05:37:45.717Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvals2`

```typescript
const value: operations.GetV2LogsIdEvals2 = {
  type: "number",
  value: 9084.95,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-08-05T09:35:19.188Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvals3`

```typescript
const value: operations.GetV2LogsIdEvals3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-06-27T13:02:24.532Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvals4`

```typescript
const value: operations.GetV2LogsIdEvals4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-01-04T04:24:46.918Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvals5`

```typescript
const value: operations.GetV2LogsIdEvals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 6889.42,
      precision: 2187.74,
      recall: 1970.58,
    },
    rouge2: {
      f1: 8278.17,
      precision: 5947.31,
      recall: 4011.11,
    },
    rougeL: {
      f1: 1110.51,
      precision: 4883.21,
      recall: 7279.89,
    },
  },
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-07-14T13:17:21.352Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "21d4b7c8-1664-4815-8ef7-6787bb128a5e",
    },
  ],
};
```

### `operations.GetV2LogsIdEvals6`

```typescript
const value: operations.GetV2LogsIdEvals6 = {
  type: "bert_score",
  value: {
    f1: 6562.50,
    precision: 1660.36,
    recall: 8277.79,
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-08-03T11:17:51.504Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvals7`

```typescript
const value: operations.GetV2LogsIdEvals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-02-13T00:18:23.435Z"),
    productType: "workflows",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "b475a60e-6fbe-4da1-8dbf-2185fb737704",
      },
    ],
    evals: [
      {
        type: "number",
        value: 4240.38,
        id: "<id>",
        status: "pending",
        timestamp: new Date("2022-05-04T11:02:48.734Z"),
        relatedEntities: [
          {
            type: "account",
            accountId: "bf52423a-649e-409a-86e2-0d6df1dcc793",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Model T",
        modelDbId: "2409d16d-c34a-435c-b916-38f7da7effeb",
        modelType: "completion",
        modelParameters: {},
        provider: "leonardoai",
        messages: [
          {
            role: "tool",
            content: "<value>",
          },
        ],
      },
      variables: [
        {
          key: "<key>",
        },
      ],
      promptSnippets: [
        {
          id: "<id>",
          key: "<key>",
          value: "<value>",
        },
      ],
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-02-12T13:05:55.973Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "4473ebae-24ab-4db0-99cd-d33975f3d9bc",
    },
  ],
};
```

