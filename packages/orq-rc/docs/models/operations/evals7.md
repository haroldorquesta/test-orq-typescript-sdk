# Evals7

## Example Usage

```typescript
import { Evals7 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2023-08-24T01:12:01.039Z"),
    productType: "experiments",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "42d635e8-d973-457a-b901-6598cf0aad1b",
      },
    ],
    evals: [
      {
        type: "number",
        value: 3147.53,
        id: "<id>",
        status: "failed",
        timestamp: new Date("2024-02-06T00:43:23.302Z"),
        relatedEntities: [
          {
            type: "account",
            accountId: "8064e0df-9235-44fe-a9b0-90250704d368",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "V90",
        modelDbId: "7f276596-6ff0-43b4-9846-5859a9f355d4",
        modelType: "tts",
        modelParameters: {},
        provider: "anthropic",
        messages: [
          {
            role: "exception",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://ethical-accompanist.com",
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
  status: "pending",
  timestamp: new Date("2024-11-15T12:21:59.895Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody1Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody1type.md)   | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `workflowRun`                                                                                                                                                      | [operations.WorkflowRun](../../models/operations/workflowrun.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The id of the resource                                                                                                                                             |
| `status`                                                                                                                                                           | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBodyStatus](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebodystatus.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `timestamp`                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `relatedEntities`                                                                                                                                                  | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody1RelatedEntities*[]                                                                              | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |