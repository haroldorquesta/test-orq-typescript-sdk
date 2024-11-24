# GetV2LogsIdEvalsResponse200PromptConfig

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse200PromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse200PromptConfig = {
  stream: false,
  model: "Cruze",
  modelDbId: "1a1b3b7f-6df0-4943-88f0-fce041621a8e",
  modelType: "embedding",
  modelParameters: {},
  provider: "aws",
  messages: [
    {
      role: "system",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://sure-footed-junior.com",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                       | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `model`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `modelDbId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The id of the resource                                                                                                         |
| `modelType`                                                                                                                    | [operations.GetV2LogsIdEvalsResponse200ModelType](../../models/operations/getv2logsidevalsresponse200modeltype.md)             | :heavy_check_mark:                                                                                                             | The type of the model                                                                                                          |
| `modelParameters`                                                                                                              | [operations.GetV2LogsIdEvalsResponse200ModelParameters](../../models/operations/getv2logsidevalsresponse200modelparameters.md) | :heavy_check_mark:                                                                                                             | Model Parameters: Not all parameters apply to every model                                                                      |
| `provider`                                                                                                                     | [operations.GetV2LogsIdEvalsResponse200Provider](../../models/operations/getv2logsidevalsresponse200provider.md)               | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `messages`                                                                                                                     | [operations.GetV2LogsIdEvalsResponse200Messages](../../models/operations/getv2logsidevalsresponse200messages.md)[]             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `integrationId`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The id of the resource                                                                                                         |
| `version`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |