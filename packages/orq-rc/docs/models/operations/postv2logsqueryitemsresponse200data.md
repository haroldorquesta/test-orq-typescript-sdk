# PostV2LogsQueryItemsResponse200Data

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponse200Data } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponse200Data = {
  promptConfig: {
    stream: false,
    model: "ATS",
    modelDbId: "1e729839-5384-43e2-a464-3c51825e5a82",
    modelType: "stt",
    modelParameters: {},
    provider: "openai",
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://fruitful-populist.com/",
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
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                  | [operations.PostV2LogsQueryItemsResponseChoices](../../models/operations/postv2logsqueryitemsresponsechoices.md)[]         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `action`                                                                                                                   | [operations.PostV2LogsQueryItemsResponseAction](../../models/operations/postv2logsqueryitemsresponseaction.md)             | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `integrationIds`                                                                                                           | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `promptConfig`                                                                                                             | [operations.PostV2LogsQueryItemsResponsePromptConfig](../../models/operations/postv2logsqueryitemsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `variables`                                                                                                                | [operations.PostV2LogsQueryItemsVariables](../../models/operations/postv2logsqueryitemsvariables.md)[]                     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `performance`                                                                                                              | [operations.PostV2LogsQueryItemsResponsePerformance](../../models/operations/postv2logsqueryitemsresponseperformance.md)   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `usage`                                                                                                                    | [operations.PostV2LogsQueryItemsResponseUsage](../../models/operations/postv2logsqueryitemsresponseusage.md)               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `billing`                                                                                                                  | [operations.PostV2LogsQueryItemsBilling](../../models/operations/postv2logsqueryitemsbilling.md)                           | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `providerResponse`                                                                                                         | *any*                                                                                                                      | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `retrievals`                                                                                                               | [operations.PostV2LogsQueryItemsResponseRetrievals](../../models/operations/postv2logsqueryitemsresponseretrievals.md)[]   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `knowledgeBases`                                                                                                           | [operations.PostV2LogsQueryItemsKnowledgeBases](../../models/operations/postv2logsqueryitemsknowledgebases.md)[]           | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `tools`                                                                                                                    | [operations.PostV2LogsQueryItemsResponseTools](../../models/operations/postv2logsqueryitemsresponsetools.md)[]             | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `promptSnippets`                                                                                                           | [operations.PostV2LogsQueryItemsPromptSnippets](../../models/operations/postv2logsqueryitemspromptsnippets.md)[]           | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |