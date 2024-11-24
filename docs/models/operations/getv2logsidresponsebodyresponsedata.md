# GetV2LogsIdResponseBodyResponseData

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyResponseData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyResponseData = {
  choices: [
    {
      index: 6927.83,
    },
  ],
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Roadster",
    modelDbId: "b2f3a06b-1e43-4191-9db1-fef13792ff37",
    modelType: "image",
    modelParameters: {},
    provider: "google-ai",
    messages: [
      {
        role: "exception",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://ambitious-permafrost.biz/",
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                        | [operations.GetV2LogsIdResponseBodyChoices](../../models/operations/getv2logsidresponsebodychoices.md)[]         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `integrationIds`                                                                                                 | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `action`                                                                                                         | [operations.GetV2LogsIdResponseBodyAction](../../models/operations/getv2logsidresponsebodyaction.md)             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `promptConfig`                                                                                                   | [operations.GetV2LogsIdResponseBodyPromptConfig](../../models/operations/getv2logsidresponsebodypromptconfig.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `variables`                                                                                                      | [operations.ResponseBodyVariables](../../models/operations/responsebodyvariables.md)[]                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `performance`                                                                                                    | [operations.GetV2LogsIdResponseBodyPerformance](../../models/operations/getv2logsidresponsebodyperformance.md)   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `usage`                                                                                                          | [operations.GetV2LogsIdResponseBodyUsage](../../models/operations/getv2logsidresponsebodyusage.md)               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `billing`                                                                                                        | [operations.ResponseBodyBilling](../../models/operations/responsebodybilling.md)                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `providerResponse`                                                                                               | *any*                                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `retrievals`                                                                                                     | [operations.GetV2LogsIdResponseBodyRetrievals](../../models/operations/getv2logsidresponsebodyretrievals.md)[]   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `knowledgeBases`                                                                                                 | [operations.ResponseBodyKnowledgeBases](../../models/operations/responsebodyknowledgebases.md)[]                 | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `tools`                                                                                                          | [operations.GetV2LogsIdResponseBodyTools](../../models/operations/getv2logsidresponsebodytools.md)[]             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `promptSnippets`                                                                                                 | [operations.ResponseBodyPromptSnippets](../../models/operations/responsebodypromptsnippets.md)[]                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |