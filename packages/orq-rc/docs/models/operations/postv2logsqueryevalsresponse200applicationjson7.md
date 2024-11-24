# PostV2LogsQueryEvalsResponse200ApplicationJson7

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJson7 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJson7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2023-08-25T13:14:09.111Z"),
    productType: "playgrounds",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "6966f7c8-3fe2-4e39-be93-4ab942a322bb",
      },
    ],
    evals: [
      {
        type: "number",
        value: 5894.55,
        id: "<id>",
        status: "failed",
        timestamp: new Date("2022-09-02T23:05:20.683Z"),
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
        model: "Wrangler",
        modelDbId: "f87f9389-862d-4122-80de-1762ddb243d7",
        modelType: "chat",
        modelParameters: {},
        provider: "replicate",
        messages: [
          {
            role: "expected_output",
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
  timestamp: new Date("2022-03-05T12:03:53.313Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItemsType](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitemstype.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `workflowRun`                                                                                                                                                                    | [operations.PostV2LogsQueryEvalsResponse200WorkflowRun](../../models/operations/postv2logsqueryevalsresponse200workflowrun.md)                                                   | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `id`                                                                                                                                                                             | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The id of the resource                                                                                                                                                           |
| `status`                                                                                                                                                                         | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyStatus](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodystatus.md)       | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `timestamp`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `relatedEntities`                                                                                                                                                                | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyRelatedEntities*[]                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |