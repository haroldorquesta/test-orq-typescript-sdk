# Items2

The schema for the deployment workflow run

## Example Usage

```typescript
import { Items2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Items2 = {
  id: "<id>",
  workspaceId: "5fbb61f1-a000-4f79-8278-27e92feec8c9",
  startedAt: new Date("2022-05-08T10:41:06.101Z"),
  evals: [
    {
      type: "string",
      value: "<value>",
      id: "<id>",
      status: "completed",
      timestamp: new Date("2024-02-02T12:36:51.052Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "e991c4e3-b172-4d9f-82db-60b1cc3fc9b7",
        },
      ],
    },
  ],
  productType: "deployments",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  data: {
    deploymentId: "<id>",
    deploymentKey: "<value>",
    deploymentVariantVersion: "<value>",
    deploymentVariantPosition: 4162.29,
    deploymentVariantId: "f12e7351-ae9a-44be-b03e-c13550242d83",
    isDefaultMatched: false,
    action: "simulate",
    promptConfig: {
      stream: false,
      model: "El Camino",
      modelDbId: "da916160-3792-41d1-b9c2-abb0a24e0d80",
      modelType: "stt",
      modelParameters: {},
      provider: "google-ai",
      messages: [
        {
          role: "correction",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://infatuated-sightseeing.net",
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
    retries: [
      {
        retryAttempt: 7189.30,
        status: 4114.46,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workflow run                                                    |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workspace                                                       |
| `workflowMetadata`                                                                            | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Metadata for the workflow run                                                                 |
| `workflowInput`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Input for the workflow run                                                                    |
| `workflowOutput`                                                                              | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Output for the workflow run                                                                   |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The optional project_id for the entity of the event                                           |
| `requestProperties`                                                                           | [operations.ItemsRequestProperties](../../models/operations/itemsrequestproperties.md)        | :heavy_minus_sign:                                                                            | An optional field that is filled if the workflow was triggered by an HTTP request             |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `finishedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `evals`                                                                                       | *operations.ItemsEvals*[]                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productType`                                                                                 | [operations.ItemsProductType](../../models/operations/itemsproducttype.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntities`                                                                             | *operations.ItemsRelatedEntities*[]                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [operations.PostV2LogsQueryItemsData](../../models/operations/postv2logsqueryitemsdata.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |