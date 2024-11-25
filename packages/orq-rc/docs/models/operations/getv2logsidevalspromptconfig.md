# GetV2LogsIdEvalsPromptConfig

## Example Usage

```typescript
import { GetV2LogsIdEvalsPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsPromptConfig = {
  stream: false,
  model: "F-150",
  modelDbId: "2dbef2c4-f354-4b53-a22f-eaef5c9150f5",
  modelType: "rerank",
  modelParameters: {},
  provider: "nvidia",
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `modelDbId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The id of the resource                                                                                   |
| `modelType`                                                                                              | [operations.GetV2LogsIdEvalsModelType](../../models/operations/getv2logsidevalsmodeltype.md)             | :heavy_check_mark:                                                                                       | The type of the model                                                                                    |
| `modelParameters`                                                                                        | [operations.GetV2LogsIdEvalsModelParameters](../../models/operations/getv2logsidevalsmodelparameters.md) | :heavy_check_mark:                                                                                       | Model Parameters: Not all parameters apply to every model                                                |
| `provider`                                                                                               | [operations.GetV2LogsIdEvalsProvider](../../models/operations/getv2logsidevalsprovider.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `messages`                                                                                               | [operations.GetV2LogsIdEvalsMessages](../../models/operations/getv2logsidevalsmessages.md)[]             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `integrationId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The id of the resource                                                                                   |
| `version`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |