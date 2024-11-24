# PostV2LogsQueryEvalsResponse200WorkflowRun

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200WorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200WorkflowRun = {
  id: "<id>",
  startedAt: new Date("2022-10-24T05:28:30.875Z"),
  productType: "llm_evaluator",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "7856276f-29f1-4bd5-9915-3a078ee0968a",
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
      timestamp: new Date("2024-09-01T02:37:44.249Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "87bc007d-32ee-44dc-af2e-0aae328f4c54",
        },
      ],
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Mustang",
      modelDbId: "0986c586-772c-4484-addf-5ed92bfd107e",
      modelType: "rerank",
      modelParameters: {},
      provider: "anyscale",
      messages: [
        {
          role: "expected_output",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://compassionate-singing.info/",
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
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `workflowMetadata`                                                                                                                                                       | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | Metadata for the workflow run                                                                                                                                            |
| `workflowInput`                                                                                                                                                          | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | Input for the workflow run                                                                                                                                               |
| `workflowOutput`                                                                                                                                                         | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | Output for the workflow run                                                                                                                                              |
| `requestProperties`                                                                                                                                                      | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONRequestProperties](../../models/operations/postv2logsqueryevalsresponse200applicationjsonrequestproperties.md) | :heavy_minus_sign:                                                                                                                                                       | An optional field that is filled if the workflow was triggered by an HTTP request                                                                                        |
| `startedAt`                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `finishedAt`                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `productType`                                                                                                                                                            | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONProductType](../../models/operations/postv2logsqueryevalsresponse200applicationjsonproducttype.md)             | :heavy_check_mark:                                                                                                                                                       | Orquesta product                                                                                                                                                         |
| `relatedEntities`                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems17RelatedEntities*[]                                                                          | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `evals`                                                                                                                                                                  | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONEvals*[]                                                                                                       | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `data`                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONData](../../models/operations/postv2logsqueryevalsresponse200applicationjsondata.md)                           | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |