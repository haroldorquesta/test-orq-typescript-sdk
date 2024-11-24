# GetV2LogsIdEvals7

## Example Usage

```typescript
import { GetV2LogsIdEvals7 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2022-08-28T11:54:56.621Z"),
    productType: "knowledge",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "40b1981c-c671-467b-9ed5-cd14aec35576",
      },
    ],
    evals: [
      {
        type: "boolean",
        value: false,
        id: "<id>",
        status: "failed",
        timestamp: new Date("2023-12-26T04:13:37.877Z"),
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
        model: "Model S",
        modelDbId: "9ed37670-61ce-4bac-9751-cd64514f1e0b",
        modelType: "completion",
        modelParameters: {},
        provider: "huggingface",
        messages: [
          {
            role: "correction",
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
  timestamp: new Date("2024-05-29T02:13:31.079Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "af08ea44-401f-4818-94c0-6a6b9825c1c3",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody27Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody27type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `workflowRun`                                                                                                                                                          | [operations.EvalsWorkflowRun](../../models/operations/evalsworkflowrun.md)                                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody27Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody27status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody27RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |