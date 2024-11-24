# GetV2LogsIdEvalsResponsePromptConfig

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponsePromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponsePromptConfig = {
  stream: false,
  model: "XC90",
  modelDbId: "32f58bf2-c458-41e7-b771-249f5d0c7a75",
  modelType: "image",
  modelParameters: {},
  provider: "openai",
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                 | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `model`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `modelDbId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The id of the resource                                                                                                   |
| `modelType`                                                                                                              | [operations.GetV2LogsIdEvalsResponseModelType](../../models/operations/getv2logsidevalsresponsemodeltype.md)             | :heavy_check_mark:                                                                                                       | The type of the model                                                                                                    |
| `modelParameters`                                                                                                        | [operations.GetV2LogsIdEvalsResponseModelParameters](../../models/operations/getv2logsidevalsresponsemodelparameters.md) | :heavy_check_mark:                                                                                                       | Model Parameters: Not all parameters apply to every model                                                                |
| `provider`                                                                                                               | [operations.GetV2LogsIdEvalsResponseProvider](../../models/operations/getv2logsidevalsresponseprovider.md)               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `messages`                                                                                                               | [operations.GetV2LogsIdEvalsResponseMessages](../../models/operations/getv2logsidevalsresponsemessages.md)[]             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `integrationId`                                                                                                          | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The id of the resource                                                                                                   |
| `version`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |