# GetV2LogsIdResponseBodyEvals


## Supported Types

### `operations.GetV2LogsIdEvalsResponse1`

```typescript
const value: operations.GetV2LogsIdEvalsResponse1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-09-22T15:48:56.938Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse2`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2 = {
  type: "number",
  value: 8045.45,
  id: "<id>",
  status: "failed",
  timestamp: new Date("2022-04-07T01:33:15.551Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "71bd0e65-0380-4862-a5a2-0764a20e110f",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse3`

```typescript
const value: operations.GetV2LogsIdEvalsResponse3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-10-11T17:06:48.998Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse4`

```typescript
const value: operations.GetV2LogsIdEvalsResponse4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-01-11T21:41:06.127Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "27ae6025-348c-40a7-a13b-ee5966284bf4",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse5`

```typescript
const value: operations.GetV2LogsIdEvalsResponse5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 7172.41,
      precision: 7219.22,
      recall: 6532.31,
    },
    rouge2: {
      f1: 2648.11,
      precision: 5559.53,
      recall: 7146.59,
    },
    rougeL: {
      f1: 4995.70,
      precision: 9077.71,
      recall: 7497.65,
    },
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2023-09-13T07:45:25.127Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "ed338015-8f91-499e-b484-2bbd387d95f8",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse6`

```typescript
const value: operations.GetV2LogsIdEvalsResponse6 = {
  type: "bert_score",
  value: {
    f1: 1429.37,
    precision: 3435.35,
    recall: 7340.49,
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-12-02T02:16:33.783Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "0f511d74-5d67-4044-9aeb-c6344c68e4ff",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse7`

```typescript
const value: operations.GetV2LogsIdEvalsResponse7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2022-04-15T14:15:42.498Z"),
    productType: "llm_evaluator",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "661cc607-03b8-4e28-bdf1-da4091aef14d",
      },
    ],
    evals: [
      {
        type: "number",
        value: 7868.22,
        id: "<id>",
        status: "completed",
        timestamp: new Date("2023-03-04T00:47:30.879Z"),
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
        model: "Camaro",
        modelDbId: "9380f01f-d8ae-4d91-ae12-50a29842d63a",
        modelType: "vision",
        modelParameters: {},
        provider: "leonardoai",
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
  status: "pending",
  timestamp: new Date("2023-09-29T11:34:19.340Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

