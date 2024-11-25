# ResponseBody2

The schema for the deployment workflow run

## Example Usage

```typescript
import { ResponseBody2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  workspaceId: "312fbde8-fadc-43ce-83d7-f61208f2d3f0",
  startedAt: new Date("2024-02-11T02:39:23.186Z"),
  evals: [
    {
      type: "number",
      value: 6800.61,
      id: "<id>",
      status: "failed",
      timestamp: new Date("2024-02-28T12:59:00.670Z"),
      relatedEntities: [
        {
          type: "human_eval",
          humanEvalId: "<id>",
        },
      ],
    },
  ],
  productType: "deployments",
  relatedEntities: [
    {
      type: "deployment_key",
      deploymentKey: "<value>",
    },
  ],
  data: {
    deploymentId: "<id>",
    deploymentKey: "<value>",
    deploymentVariantVersion: "<value>",
    deploymentVariantPosition: 1525.65,
    deploymentVariantId: "face2c0d-cf11-44f1-b972-025ac92abe4a",
    isDefaultMatched: false,
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Model Y",
      modelDbId: "1a2b78ea-678a-41b7-816f-226eb1b8ce83",
      modelType: "rerank",
      modelParameters: {},
      provider: "fal",
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
    retries: [
      {
        retryAttempt: 9130.14,
        status: 1319.18,
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier for the workflow run                                                           |
| `workspaceId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier for the workspace                                                              |
| `workflowMetadata`                                                                                   | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Metadata for the workflow run                                                                        |
| `workflowInput`                                                                                      | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Input for the workflow run                                                                           |
| `workflowOutput`                                                                                     | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Output for the workflow run                                                                          |
| `projectId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The optional project_id for the entity of the event                                                  |
| `requestProperties`                                                                                  | [operations.ResponseBodyRequestProperties](../../models/operations/responsebodyrequestproperties.md) | :heavy_minus_sign:                                                                                   | An optional field that is filled if the workflow was triggered by an HTTP request                    |
| `startedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `finishedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `evals`                                                                                              | *operations.ResponseBodyEvals*[]                                                                     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `productType`                                                                                        | [operations.ResponseBodyProductType](../../models/operations/responsebodyproducttype.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `relatedEntities`                                                                                    | *operations.ResponseBodyRelatedEntities*[]                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | [operations.GetV2LogsIdResponseBodyData](../../models/operations/getv2logsidresponsebodydata.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |