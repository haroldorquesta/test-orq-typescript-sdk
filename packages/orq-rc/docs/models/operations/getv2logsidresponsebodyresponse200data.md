# GetV2LogsIdResponseBodyResponse200Data

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyResponse200Data } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyResponse200Data = {
  promptConfig: {
    stream: false,
    model: "Spyder",
    modelDbId: "e6ffde16-6354-4a44-8239-a6b28aa81156",
    modelType: "completion",
    modelParameters: {},
    provider: "cohere",
    messages: [
      {
        role: "assistant",
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
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                        | [operations.GetV2LogsIdResponseBodyResponseChoices](../../models/operations/getv2logsidresponsebodyresponsechoices.md)[]         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `action`                                                                                                                         | [operations.GetV2LogsIdResponseBodyResponseAction](../../models/operations/getv2logsidresponsebodyresponseaction.md)             | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `integrationIds`                                                                                                                 | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `promptConfig`                                                                                                                   | [operations.GetV2LogsIdResponseBodyResponsePromptConfig](../../models/operations/getv2logsidresponsebodyresponsepromptconfig.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `variables`                                                                                                                      | [operations.GetV2LogsIdResponseBodyVariables](../../models/operations/getv2logsidresponsebodyvariables.md)[]                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `performance`                                                                                                                    | [operations.GetV2LogsIdResponseBodyResponsePerformance](../../models/operations/getv2logsidresponsebodyresponseperformance.md)   | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `usage`                                                                                                                          | [operations.GetV2LogsIdResponseBodyResponseUsage](../../models/operations/getv2logsidresponsebodyresponseusage.md)               | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `billing`                                                                                                                        | [operations.GetV2LogsIdResponseBodyBilling](../../models/operations/getv2logsidresponsebodybilling.md)                           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `providerResponse`                                                                                                               | *any*                                                                                                                            | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `retrievals`                                                                                                                     | [operations.GetV2LogsIdResponseBodyResponseRetrievals](../../models/operations/getv2logsidresponsebodyresponseretrievals.md)[]   | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `knowledgeBases`                                                                                                                 | [operations.GetV2LogsIdResponseBodyKnowledgeBases](../../models/operations/getv2logsidresponsebodyknowledgebases.md)[]           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `tools`                                                                                                                          | [operations.GetV2LogsIdResponseBodyResponseTools](../../models/operations/getv2logsidresponsebodyresponsetools.md)[]             | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `promptSnippets`                                                                                                                 | [operations.GetV2LogsIdResponseBodyPromptSnippets](../../models/operations/getv2logsidresponsebodypromptsnippets.md)[]           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |