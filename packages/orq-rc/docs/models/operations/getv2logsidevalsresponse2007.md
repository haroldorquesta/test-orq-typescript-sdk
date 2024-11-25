# GetV2LogsIdEvalsResponse2007

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse2007 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse2007 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2023-08-17T10:41:10.454Z"),
    productType: "router",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "2238744c-1e6c-42c4-a0c9-a9350e720c54",
      },
    ],
    evals: [
      {
        type: "number",
        value: 6188.83,
        id: "<id>",
        status: "pending",
        timestamp: new Date("2023-02-04T21:25:07.192Z"),
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "3518666b-747f-472d-be50-c58c74deb009",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Altima",
        modelDbId: "eeca51f4-2f9f-4d4a-b968-81280c61d12c",
        modelType: "chat",
        modelParameters: {},
        provider: "cohere",
        messages: [
          {
            role: "exception",
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
  timestamp: new Date("2023-05-06T09:10:53.396Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody47Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody47type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `workflowRun`                                                                                                                                                          | [operations.GetV2LogsIdEvalsResponseWorkflowRun](../../models/operations/getv2logsidevalsresponseworkflowrun.md)                                                       | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody47Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody47status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody47RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |