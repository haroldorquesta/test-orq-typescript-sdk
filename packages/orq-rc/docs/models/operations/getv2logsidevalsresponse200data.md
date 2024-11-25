# GetV2LogsIdEvalsResponse200Data

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse200Data } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse200Data = {
  action: "invoke",
  promptConfig: {
    stream: false,
    model: "Fortwo",
    modelDbId: "b27ba150-2368-4dc7-942e-79bbd76c50da",
    modelType: "rerank",
    modelParameters: {},
    provider: "perplexity",
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `choices`                                                                                                                      | [operations.GetV2LogsIdEvalsResponse200Choices](../../models/operations/getv2logsidevalsresponse200choices.md)[]               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `action`                                                                                                                       | [operations.GetV2LogsIdEvalsResponse200Action](../../models/operations/getv2logsidevalsresponse200action.md)                   | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `promptConfig`                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200PromptConfig](../../models/operations/getv2logsidevalsresponse200promptconfig.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `variables`                                                                                                                    | [operations.GetV2LogsIdEvalsResponse200Variables](../../models/operations/getv2logsidevalsresponse200variables.md)[]           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `performance`                                                                                                                  | [operations.GetV2LogsIdEvalsResponse200Performance](../../models/operations/getv2logsidevalsresponse200performance.md)         | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `usage`                                                                                                                        | [operations.GetV2LogsIdEvalsResponse200Usage](../../models/operations/getv2logsidevalsresponse200usage.md)                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `billing`                                                                                                                      | [operations.GetV2LogsIdEvalsResponse200Billing](../../models/operations/getv2logsidevalsresponse200billing.md)                 | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `tools`                                                                                                                        | [operations.GetV2LogsIdEvalsResponse200Tools](../../models/operations/getv2logsidevalsresponse200tools.md)[]                   | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `promptSnippets`                                                                                                               | [operations.GetV2LogsIdEvalsResponse200PromptSnippets](../../models/operations/getv2logsidevalsresponse200promptsnippets.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |