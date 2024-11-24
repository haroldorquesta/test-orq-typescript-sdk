# PostV2LogsQueryEvalsResponse200Data

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200Data } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200Data = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Beetle",
    modelDbId: "578de391-7557-4b1e-9b2f-8f38449ecb8e",
    modelType: "stt",
    modelParameters: {},
    provider: "fal",
    messages: [
      {
        role: "assistant",
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `choices`                                                                                                                              | [operations.PostV2LogsQueryEvalsResponse200Choices](../../models/operations/postv2logsqueryevalsresponse200choices.md)[]               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `action`                                                                                                                               | [operations.PostV2LogsQueryEvalsResponse200Action](../../models/operations/postv2logsqueryevalsresponse200action.md)                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `promptConfig`                                                                                                                         | [operations.PostV2LogsQueryEvalsResponse200PromptConfig](../../models/operations/postv2logsqueryevalsresponse200promptconfig.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `variables`                                                                                                                            | [operations.PostV2LogsQueryEvalsResponse200Variables](../../models/operations/postv2logsqueryevalsresponse200variables.md)[]           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `performance`                                                                                                                          | [operations.PostV2LogsQueryEvalsResponse200Performance](../../models/operations/postv2logsqueryevalsresponse200performance.md)         | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `usage`                                                                                                                                | [operations.PostV2LogsQueryEvalsResponse200Usage](../../models/operations/postv2logsqueryevalsresponse200usage.md)                     | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `billing`                                                                                                                              | [operations.PostV2LogsQueryEvalsResponse200Billing](../../models/operations/postv2logsqueryevalsresponse200billing.md)                 | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `tools`                                                                                                                                | [operations.PostV2LogsQueryEvalsResponse200Tools](../../models/operations/postv2logsqueryevalsresponse200tools.md)[]                   | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `promptSnippets`                                                                                                                       | [operations.PostV2LogsQueryEvalsResponse200PromptSnippets](../../models/operations/postv2logsqueryevalsresponse200promptsnippets.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |