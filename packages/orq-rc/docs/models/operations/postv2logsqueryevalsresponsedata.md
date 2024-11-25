# PostV2LogsQueryEvalsResponseData

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponseData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponseData = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "XTS",
    modelDbId: "52c0140f-b8ca-423d-9576-0b8a4636afa8",
    modelType: "chat",
    modelParameters: {},
    provider: "azure",
    messages: [
      {
        role: "assistant",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://frequent-gripper.biz",
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                        | [operations.PostV2LogsQueryEvalsResponseChoices](../../models/operations/postv2logsqueryevalsresponsechoices.md)[]               | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `action`                                                                                                                         | [operations.PostV2LogsQueryEvalsResponseAction](../../models/operations/postv2logsqueryevalsresponseaction.md)                   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `promptConfig`                                                                                                                   | [operations.PostV2LogsQueryEvalsResponsePromptConfig](../../models/operations/postv2logsqueryevalsresponsepromptconfig.md)       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `variables`                                                                                                                      | [operations.PostV2LogsQueryEvalsResponseVariables](../../models/operations/postv2logsqueryevalsresponsevariables.md)[]           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `performance`                                                                                                                    | [operations.PostV2LogsQueryEvalsResponsePerformance](../../models/operations/postv2logsqueryevalsresponseperformance.md)         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `usage`                                                                                                                          | [operations.PostV2LogsQueryEvalsResponseUsage](../../models/operations/postv2logsqueryevalsresponseusage.md)                     | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `billing`                                                                                                                        | [operations.PostV2LogsQueryEvalsResponseBilling](../../models/operations/postv2logsqueryevalsresponsebilling.md)                 | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `tools`                                                                                                                          | [operations.PostV2LogsQueryEvalsResponseTools](../../models/operations/postv2logsqueryevalsresponsetools.md)[]                   | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `promptSnippets`                                                                                                                 | [operations.PostV2LogsQueryEvalsResponsePromptSnippets](../../models/operations/postv2logsqueryevalsresponsepromptsnippets.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |