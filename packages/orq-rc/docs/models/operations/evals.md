# Evals


## Supported Types

### `operations.Evals1`

```typescript
const value: operations.Evals1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-10-30T09:36:20.078Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "dc8a98bf-75fc-4f6f-8966-567e99814e43",
    },
  ],
};
```

### `operations.Evals2`

```typescript
const value: operations.Evals2 = {
  type: "number",
  value: 5845.93,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-06-07T13:12:18.338Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.Evals3`

```typescript
const value: operations.Evals3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-05-25T01:58:23.352Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "663034be-4e35-4e42-9e98-c01570c269d8",
    },
  ],
};
```

### `operations.Evals4`

```typescript
const value: operations.Evals4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "failed",
  timestamp: new Date("2023-05-19T09:27:49.693Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "c67d6b6b-6434-4165-9032-8aac1f1f19cd",
    },
  ],
};
```

### `operations.Evals5`

```typescript
const value: operations.Evals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 4210.88,
      precision: 6797.48,
      recall: 2695.28,
    },
    rouge2: {
      f1: 8096.51,
      precision: 4393.15,
      recall: 6604.46,
    },
    rougeL: {
      f1: 6692.69,
      precision: 8324.04,
      recall: 7203.14,
    },
  },
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-01-04T01:05:39.851Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "3c73082d-8388-48e7-afa0-30e8ea817e75",
    },
  ],
};
```

### `operations.Evals6`

```typescript
const value: operations.Evals6 = {
  type: "bert_score",
  value: {
    f1: 154.80,
    precision: 7455.07,
    recall: 7702.47,
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-12-21T08:49:01.791Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.Evals7`

```typescript
const value: operations.Evals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2022-07-03T12:09:08.398Z"),
    productType: "workflows",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "12d99150-f5cb-49a1-9849-4122c994d550",
      },
    ],
    evals: [
      {
        type: "number",
        value: 4928.88,
        id: "<id>",
        status: "pending",
        timestamp: new Date("2022-06-27T08:20:25.393Z"),
        relatedEntities: [
          {
            type: "contact",
            contactId: "<id>",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Corvette",
        modelDbId: "5346aaef-fe92-43f5-9580-8271268af110",
        modelType: "stt",
        modelParameters: {},
        provider: "perplexity",
        messages: [
          {
            role: "correction",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://alert-barracks.org",
                },
              },
            ],
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
  timestamp: new Date("2024-06-05T09:06:37.685Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

