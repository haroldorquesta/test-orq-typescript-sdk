# ResponseBody3

The schema for the deployment workflow run

## Example Usage

```typescript
import { ResponseBody3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody3 = {
  id: "<id>",
  workspaceId: "0bc9708a-e730-4ad4-b9a0-3bf4e7175a0b",
  startedAt: new Date("2023-03-24T07:59:57.896Z"),
  evals: [
    {
      type: "bert_score",
      value: {
        f1: 8423.43,
        precision: 4192.83,
        recall: 6618.55,
      },
      id: "<id>",
      status: "completed",
      timestamp: new Date("2024-05-02T13:17:55.984Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "b49d8ac0-86cf-464a-9870-693a74f69e9a",
        },
      ],
    },
  ],
  productType: "playgrounds",
  relatedEntities: [
    {
      type: "playground",
      playgroundId: "476b6d5d-9def-4cc1-ab97-8c5c1e3861d2",
    },
  ],
  data: {
    choices: [
      {
        index: 1872.79,
      },
    ],
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "XC90",
      modelDbId: "a4d0493c-d8ce-408e-80c0-9f6c999a08d3",
      modelType: "vision",
      modelParameters: {},
      provider: "aws",
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
    billing: {
      billable: false,
    },
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The unique identifier for the workflow run                                                                                 |
| `workspaceId`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The unique identifier for the workspace                                                                                    |
| `workflowMetadata`                                                                                                         | Record<string, *any*>                                                                                                      | :heavy_minus_sign:                                                                                                         | Metadata for the workflow run                                                                                              |
| `workflowInput`                                                                                                            | Record<string, *any*>                                                                                                      | :heavy_minus_sign:                                                                                                         | Input for the workflow run                                                                                                 |
| `workflowOutput`                                                                                                           | Record<string, *any*>                                                                                                      | :heavy_minus_sign:                                                                                                         | Output for the workflow run                                                                                                |
| `projectId`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The optional project_id for the entity of the event                                                                        |
| `requestProperties`                                                                                                        | [operations.GetV2LogsIdResponseBodyRequestProperties](../../models/operations/getv2logsidresponsebodyrequestproperties.md) | :heavy_minus_sign:                                                                                                         | An optional field that is filled if the workflow was triggered by an HTTP request                                          |
| `startedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `finishedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `evals`                                                                                                                    | *operations.GetV2LogsIdResponseBodyEvals*[]                                                                                | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `productType`                                                                                                              | [operations.GetV2LogsIdResponseBodyProductType](../../models/operations/getv2logsidresponsebodyproducttype.md)             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `relatedEntities`                                                                                                          | *operations.GetV2LogsIdResponseBodyRelatedEntities*[]                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `data`                                                                                                                     | [operations.GetV2LogsIdResponseBodyResponseData](../../models/operations/getv2logsidresponsebodyresponsedata.md)           | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |