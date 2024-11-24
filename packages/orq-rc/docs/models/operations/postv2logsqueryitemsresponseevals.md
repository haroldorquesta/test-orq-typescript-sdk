# PostV2LogsQueryItemsResponseEvals


## Supported Types

### `operations.PostV2LogsQueryEvalsResponse2001`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2001 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-05-13T11:35:30.480Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse2002`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2002 = {
  type: "number",
  value: 9219.16,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-05-06T22:58:12.367Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse2003`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2003 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-07-13T00:14:07.257Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse2004`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2004 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "failed",
  timestamp: new Date("2023-08-15T07:58:15.099Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "7a893d8b-f6e0-4094-b345-b9cdd66ea185",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse2005`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2005 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 136.55,
      precision: 6121.81,
      recall: 7236.23,
    },
    rouge2: {
      f1: 2889.07,
      precision: 9736.42,
      recall: 8595.37,
    },
    rougeL: {
      f1: 9156.53,
      precision: 192.32,
      recall: 5698.72,
    },
  },
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-07-19T12:50:57.168Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse2006`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2006 = {
  type: "bert_score",
  value: {
    f1: 5388.77,
    precision: 1145.88,
    recall: 5402.23,
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-11-13T16:19:02.583Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse2007`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2007 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-11-26T06:30:19.542Z"),
    productType: "workflows",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "a87e011c-5a96-48af-b991-f8c0644c970f",
      },
    ],
    evals: [
      {
        type: "string",
        value: "<value>",
        id: "<id>",
        status: "pending",
        timestamp: new Date("2023-08-05T02:21:50.561Z"),
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "e945e723-417e-4a10-945c-f6afba15e3db",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Fortwo",
        modelDbId: "8b82c6f4-459e-4249-877d-e7ac84a9e0e8",
        modelType: "embedding",
        modelParameters: {},
        provider: "perplexity",
        messages: [
          {
            role: "exception",
            content: [
              {
                type: "text",
                text: "<value>",
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
  status: "pending",
  timestamp: new Date("2024-06-19T13:15:30.828Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

