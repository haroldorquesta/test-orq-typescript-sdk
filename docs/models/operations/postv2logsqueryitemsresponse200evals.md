# PostV2LogsQueryItemsResponse200Evals


## Supported Types

### `operations.PostV2LogsQueryEvalsResponse200ApplicationJson1`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse200ApplicationJson1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-11-04T23:29:44.200Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse200ApplicationJson2`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse200ApplicationJson2 = {
  type: "number",
  value: 5629.58,
  id: "<id>",
  status: "failed",
  timestamp: new Date("2022-05-10T11:56:00.057Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "b86197a4-6438-4d07-8caf-02508a66e945",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse200ApplicationJson3`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse200ApplicationJson3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-01-05T11:56:48.452Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse200ApplicationJson4`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse200ApplicationJson4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-08-15T13:06:25.159Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "404f012b-f917-4c24-9a5b-cd86923dd676",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse200ApplicationJson5`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse200ApplicationJson5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 2277.91,
      precision: 2182.88,
      recall: 8327.79,
    },
    rouge2: {
      f1: 6670.82,
      precision: 9757.79,
      recall: 1602.25,
    },
    rougeL: {
      f1: 9234.45,
      precision: 7655.77,
      recall: 5275.75,
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-07-07T00:56:00.393Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse200ApplicationJson6`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse200ApplicationJson6 = {
  type: "bert_score",
  value: {
    f1: 6473.82,
    precision: 9767.70,
    recall: 7202.96,
  },
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-02-25T14:49:29.759Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "60b4e260-739b-4421-84d6-345389cb32ed",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse200ApplicationJson7`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse200ApplicationJson7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2022-01-26T16:13:32.465Z"),
    productType: "playgrounds",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "de3c6a52-b40f-461c-ad4a-1633f08a53c2",
      },
    ],
    evals: [
      {
        type: "string_array",
        values: [
          "<value>",
        ],
        id: "<id>",
        status: "failed",
        timestamp: new Date("2023-04-10T09:28:04.302Z"),
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
        model: "Impala",
        modelDbId: "a4813622-2879-4f93-a43c-71d69f98ee7a",
        modelType: "embedding",
        modelParameters: {},
        provider: "anthropic",
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
  status: "failed",
  timestamp: new Date("2024-04-13T15:31:57.389Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

