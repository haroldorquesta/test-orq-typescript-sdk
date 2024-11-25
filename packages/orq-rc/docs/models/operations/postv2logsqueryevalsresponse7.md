# PostV2LogsQueryEvalsResponse7

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse7 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-03-20T09:23:48.962Z"),
    productType: "deployments",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "402d3f24-d64b-40ed-a1cf-79a4a76eced0",
      },
    ],
    evals: [
      {
        type: "boolean",
        value: false,
        id: "<id>",
        status: "completed",
        timestamp: new Date("2022-10-26T01:32:31.415Z"),
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
        model: "911",
        modelDbId: "18937702-9fa1-4d61-8936-5a6138c0919d",
        modelType: "vision",
        modelParameters: {},
        provider: "groq",
        messages: [
          {
            role: "assistant",
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
  timestamp: new Date("2024-02-01T07:59:07.864Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems37Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems37type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `workflowRun`                                                                                                                                                                            | [operations.PostV2LogsQueryEvalsWorkflowRun](../../models/operations/postv2logsqueryevalsworkflowrun.md)                                                                                 | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems37Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems37status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems37RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |