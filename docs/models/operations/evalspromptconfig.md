# EvalsPromptConfig

## Example Usage

```typescript
import { EvalsPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: EvalsPromptConfig = {
  stream: false,
  model: "Grand Cherokee",
  modelDbId: "510d277b-7a28-44ec-bb0a-60ba2e3a929d",
  modelType: "tts",
  modelParameters: {},
  provider: "leonardoai",
  messages: [
    {
      role: "exception",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `stream`                                                                           | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `modelDbId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The id of the resource                                                             |
| `modelType`                                                                        | [operations.EvalsModelType](../../models/operations/evalsmodeltype.md)             | :heavy_check_mark:                                                                 | The type of the model                                                              |
| `modelParameters`                                                                  | [operations.EvalsModelParameters](../../models/operations/evalsmodelparameters.md) | :heavy_check_mark:                                                                 | Model Parameters: Not all parameters apply to every model                          |
| `provider`                                                                         | [operations.EvalsProvider](../../models/operations/evalsprovider.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `messages`                                                                         | [operations.EvalsMessages](../../models/operations/evalsmessages.md)[]             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `integrationId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The id of the resource                                                             |
| `version`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |