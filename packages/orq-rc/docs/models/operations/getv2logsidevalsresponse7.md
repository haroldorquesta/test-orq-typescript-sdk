# GetV2LogsIdEvalsResponse7

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse7 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-08-26T04:10:55.757Z"),
    productType: "workflows",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "c2a540c9-08ba-4913-be0c-558969f586b4",
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
        timestamp: new Date("2023-05-22T02:13:44.656Z"),
        relatedEntities: [
          {
            type: "account",
            accountId: "bfd36e56-d241-4507-bff7-b6b1327d0c2d",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "XTS",
        modelDbId: "a35688d6-eb58-4fc6-a6b4-27248c458e9b",
        modelType: "completion",
        modelParameters: {},
        provider: "huggingface",
        messages: [
          {
            role: "system",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://genuine-custody.biz/",
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
  status: "failed",
  timestamp: new Date("2023-09-03T18:58:52.684Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "ce4ced14-e1e8-4e2e-901b-f3c254dc61fe",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody37Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody37type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `workflowRun`                                                                                                                                                          | [operations.GetV2LogsIdEvalsWorkflowRun](../../models/operations/getv2logsidevalsworkflowrun.md)                                                                       | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody37Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody37status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody37RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |