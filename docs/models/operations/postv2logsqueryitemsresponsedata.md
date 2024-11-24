# PostV2LogsQueryItemsResponseData

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponseData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponseData = {
  choices: [
    {
      index: 2076.89,
    },
  ],
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Sentra",
    modelDbId: "e877ff31-0563-4edb-a7ef-e4d51bcf7416",
    modelType: "vision",
    modelParameters: {},
    provider: "anthropic",
    messages: [
      {
        role: "user",
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
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                  | [operations.PostV2LogsQueryItemsChoices](../../models/operations/postv2logsqueryitemschoices.md)[]         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `integrationIds`                                                                                           | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `action`                                                                                                   | [operations.PostV2LogsQueryItemsAction](../../models/operations/postv2logsqueryitemsaction.md)             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `promptConfig`                                                                                             | [operations.PostV2LogsQueryItemsPromptConfig](../../models/operations/postv2logsqueryitemspromptconfig.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `variables`                                                                                                | [operations.ItemsVariables](../../models/operations/itemsvariables.md)[]                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `performance`                                                                                              | [operations.PostV2LogsQueryItemsPerformance](../../models/operations/postv2logsqueryitemsperformance.md)   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `usage`                                                                                                    | [operations.PostV2LogsQueryItemsUsage](../../models/operations/postv2logsqueryitemsusage.md)               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `billing`                                                                                                  | [operations.ItemsBilling](../../models/operations/itemsbilling.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `providerResponse`                                                                                         | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `retrievals`                                                                                               | [operations.PostV2LogsQueryItemsRetrievals](../../models/operations/postv2logsqueryitemsretrievals.md)[]   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `knowledgeBases`                                                                                           | [operations.ItemsKnowledgeBases](../../models/operations/itemsknowledgebases.md)[]                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `tools`                                                                                                    | [operations.PostV2LogsQueryItemsTools](../../models/operations/postv2logsqueryitemstools.md)[]             | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptSnippets`                                                                                           | [operations.ItemsPromptSnippets](../../models/operations/itemspromptsnippets.md)[]                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |