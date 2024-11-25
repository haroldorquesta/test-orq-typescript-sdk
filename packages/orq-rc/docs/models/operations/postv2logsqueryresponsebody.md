# PostV2LogsQueryResponseBody

Returns a list of workflow runs

## Example Usage

```typescript
import { PostV2LogsQueryResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryResponseBody = {
  count: 3207.88,
  items: [
    {
      id: "<id>",
      workspaceId: "d7137f3c-2a3c-48e1-a3c5-1b21862a6a6d",
      startedAt: new Date("2024-06-08T18:22:37.952Z"),
      evals: [
        {
          type: "rouge_n",
          value: {
            rouge1: {
              f1: 3616.90,
              precision: 3877.49,
              recall: 8074.46,
            },
            rouge2: {
              f1: 292.27,
              precision: 1731.44,
              recall: 6295.37,
            },
            rougeL: {
              f1: 7434.22,
              precision: 8523.55,
              recall: 7710.11,
            },
          },
          id: "<id>",
          status: "failed",
          timestamp: new Date("2024-10-05T03:54:29.465Z"),
          relatedEntities: [
            {
              type: "contact",
              contactId: "<id>",
            },
          ],
        },
      ],
      productType: "deployments",
      relatedEntities: [
        {
          type: "chain",
          chainId: "<id>",
        },
      ],
      data: {
        deploymentId: "<id>",
        deploymentKey: "<value>",
        deploymentVariantVersion: "<value>",
        deploymentVariantPosition: 2960.20,
        deploymentVariantId: "efb5f068-836b-4cb0-aa3a-693ae51f8dfd",
        isDefaultMatched: false,
        action: "simulate",
        promptConfig: {
          stream: false,
          model: "Expedition",
          modelDbId: "3de0b5d3-92e2-4a3c-82c8-b88939447394",
          modelType: "rerank",
          modelParameters: {},
          provider: "google-ai",
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
        retries: [
          {
            retryAttempt: 105.88,
            status: 1992.18,
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
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `count`               | *number*              | :heavy_check_mark:    | Total number of items |
| `items`               | *operations.Items*[]  | :heavy_check_mark:    | List of items         |
| `nextLastId`          | *string*              | :heavy_minus_sign:    | N/A                   |