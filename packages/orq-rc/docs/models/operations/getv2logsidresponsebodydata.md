# GetV2LogsIdResponseBodyData

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyData = {
  deploymentId: "<id>",
  deploymentKey: "<value>",
  deploymentVariantVersion: "<value>",
  deploymentVariantPosition: 9885.85,
  deploymentVariantId: "f8440c84-038c-48cf-b32d-f99fb922ab10",
  isDefaultMatched: false,
  action: "simulate",
  promptConfig: {
    stream: false,
    model: "Impala",
    modelDbId: "64c5242f-df8c-4557-b591-4a814ff389ee",
    modelType: "rerank",
    modelParameters: {},
    provider: "cohere",
    messages: [
      {
        role: "user",
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
      retryAttempt: 3295.81,
      status: 5110.42,
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentKey`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentVariantVersion`                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentVariantPosition`                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentVariantId`                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `isDefaultMatched`                                                                         | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `choices`                                                                                  | [operations.ResponseBodyChoices](../../models/operations/responsebodychoices.md)[]         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `integrationIds`                                                                           | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `action`                                                                                   | [operations.ResponseBodyAction](../../models/operations/responsebodyaction.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `promptConfig`                                                                             | [operations.ResponseBodyPromptConfig](../../models/operations/responsebodypromptconfig.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `variables`                                                                                | [operations.Variables](../../models/operations/variables.md)[]                             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `performance`                                                                              | [operations.ResponseBodyPerformance](../../models/operations/responsebodyperformance.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `usage`                                                                                    | [operations.ResponseBodyUsage](../../models/operations/responsebodyusage.md)               | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `billing`                                                                                  | [operations.Billing](../../models/operations/billing.md)                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `retries`                                                                                  | [operations.Retries](../../models/operations/retries.md)[]                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `providerResponse`                                                                         | *any*                                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `retrievals`                                                                               | [operations.ResponseBodyRetrievals](../../models/operations/responsebodyretrievals.md)[]   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `knowledgeBases`                                                                           | [operations.KnowledgeBases](../../models/operations/knowledgebases.md)[]                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `tools`                                                                                    | [operations.ResponseBodyTools](../../models/operations/responsebodytools.md)[]             | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | [operations.ResponseBodyMetadata](../../models/operations/responsebodymetadata.md)         | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `settings`                                                                                 | [operations.Settings](../../models/operations/settings.md)                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `processingAttempts`                                                                       | [operations.ProcessingAttempts](../../models/operations/processingattempts.md)[]           | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `promptSnippets`                                                                           | [operations.PromptSnippets](../../models/operations/promptsnippets.md)[]                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `files`                                                                                    | [operations.ResponseBodyFiles](../../models/operations/responsebodyfiles.md)[]             | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `cacheKey`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `cacheConfig`                                                                              | *operations.CacheConfig*                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `isCachingEnabled`                                                                         | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `cacheStatus`                                                                              | [operations.CacheStatus](../../models/operations/cachestatus.md)                           | :heavy_minus_sign:                                                                         | N/A                                                                                        |