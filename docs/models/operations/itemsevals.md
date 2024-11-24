# ItemsEvals


## Supported Types

### `operations.PostV2LogsQueryEvals1`

```typescript
const value: operations.PostV2LogsQueryEvals1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-05-25T01:30:05.067Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvals2`

```typescript
const value: operations.PostV2LogsQueryEvals2 = {
  type: "number",
  value: 8154.45,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-09-18T03:44:36.212Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvals3`

```typescript
const value: operations.PostV2LogsQueryEvals3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-08-28T08:37:13.354Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvals4`

```typescript
const value: operations.PostV2LogsQueryEvals4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-01-12T03:54:22.379Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "dfb99a05-5f0b-4615-820a-0062751aaad0",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvals5`

```typescript
const value: operations.PostV2LogsQueryEvals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 5231.65,
      precision: 4660.16,
      recall: 9905.67,
    },
    rouge2: {
      f1: 3575.36,
      precision: 3891.04,
      recall: 8357.06,
    },
    rougeL: {
      f1: 6230.92,
      precision: 710.75,
      recall: 576.59,
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-03-11T20:41:59.793Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvals6`

```typescript
const value: operations.PostV2LogsQueryEvals6 = {
  type: "bert_score",
  value: {
    f1: 6280.62,
    precision: 3.07,
    recall: 168.78,
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2022-06-30T09:14:54.880Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvals7`

```typescript
const value: operations.PostV2LogsQueryEvals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-10-27T18:49:41.103Z"),
    productType: "workflows",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "dee1d608-1175-4e5d-a0f0-40f05a503b6d",
      },
    ],
    evals: [
      {
        type: "boolean",
        value: false,
        id: "<id>",
        status: "pending",
        timestamp: new Date("2024-12-12T06:30:44.864Z"),
        relatedEntities: [
          {
            type: "human_eval",
            humanEvalId: "<id>",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Challenger",
        modelDbId: "9b7a1dac-18b8-4109-9cf9-3616d602ab3c",
        modelType: "image",
        modelParameters: {},
        provider: "replicate",
        messages: [
          {
            role: "prompt",
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
  status: "failed",
  timestamp: new Date("2023-06-14T20:02:24.167Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

