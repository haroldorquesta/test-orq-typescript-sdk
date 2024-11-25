# ResponseBody4

The schema for the experiment workflow run

## Example Usage

```typescript
import { ResponseBody4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody4 = {
  id: "<id>",
  workspaceId: "7bca4674-97ce-46e8-84ee-e782f0d35b1c",
  startedAt: new Date("2024-06-27T03:13:29.237Z"),
  evals: [
    {
      type: "string_array",
      values: [
        "<value>",
      ],
      id: "<id>",
      status: "failed",
      timestamp: new Date("2023-09-04T23:23:46.313Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "37f5c9fc-0127-4dd8-8931-1145de2b9981",
        },
      ],
    },
  ],
  productType: "experiments",
  relatedEntities: [
    {
      type: "experiment_run",
      experimentRunId: "60011e3f-1d96-48f2-a7fa-f124a4a03777",
    },
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "Escalade",
      modelDbId: "ec6dc897-8845-4ff1-bdda-ef5e668e5a6a",
      modelType: "embedding",
      modelParameters: {},
      provider: "huggingface",
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
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The unique identifier for the workflow run                                                                                                 |
| `workspaceId`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The unique identifier for the workspace                                                                                                    |
| `workflowMetadata`                                                                                                                         | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Metadata for the workflow run                                                                                                              |
| `workflowInput`                                                                                                                            | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Input for the workflow run                                                                                                                 |
| `workflowOutput`                                                                                                                           | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Output for the workflow run                                                                                                                |
| `projectId`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The optional project_id for the entity of the event                                                                                        |
| `requestProperties`                                                                                                                        | [operations.GetV2LogsIdResponseBodyResponseRequestProperties](../../models/operations/getv2logsidresponsebodyresponserequestproperties.md) | :heavy_minus_sign:                                                                                                                         | An optional field that is filled if the workflow was triggered by an HTTP request                                                          |
| `startedAt`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `finishedAt`                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `evals`                                                                                                                                    | *operations.GetV2LogsIdResponseBodyResponseEvals*[]                                                                                        | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `productType`                                                                                                                              | [operations.GetV2LogsIdResponseBodyResponseProductType](../../models/operations/getv2logsidresponsebodyresponseproducttype.md)             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `relatedEntities`                                                                                                                          | *operations.GetV2LogsIdResponseBodyResponseRelatedEntities*[]                                                                              | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `data`                                                                                                                                     | [operations.GetV2LogsIdResponseBodyResponse200Data](../../models/operations/getv2logsidresponsebodyresponse200data.md)                     | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |