# PostV2LogsQueryEvalsResponse2007

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse2007 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse2007 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-12-13T08:48:33.282Z"),
    productType: "workflows",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "f1f37c39-2115-406a-9611-42f2c998f5c8",
      },
    ],
    evals: [
      {
        type: "string_array",
        values: [
          "<value>",
        ],
        id: "<id>",
        status: "completed",
        timestamp: new Date("2022-05-11T07:59:28.486Z"),
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
        model: "Mustang",
        modelDbId: "be4c79ff-d5ea-460c-88cb-c4c87a014f25",
        modelType: "embedding",
        modelParameters: {},
        provider: "replicate",
        messages: [
          {
            role: "expected_output",
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
  timestamp: new Date("2024-06-29T19:26:32.721Z"),
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
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems47Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems47type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `workflowRun`                                                                                                                                                                            | [operations.PostV2LogsQueryEvalsResponseWorkflowRun](../../models/operations/postv2logsqueryevalsresponseworkflowrun.md)                                                                 | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems47Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems47status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems47RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |