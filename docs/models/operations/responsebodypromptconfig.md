# ResponseBodyPromptConfig

## Example Usage

```typescript
import { ResponseBodyPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyPromptConfig = {
  stream: false,
  model: "Land Cruiser",
  modelDbId: "7b9ffc49-f017-4a25-b0b3-d8a225e183b4",
  modelType: "image",
  modelParameters: {},
  provider: "google-ai",
  messages: [
    {
      role: "correction",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `stream`                                                                                         | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `modelDbId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The id of the resource                                                                           |
| `modelType`                                                                                      | [operations.ResponseBodyModelType](../../models/operations/responsebodymodeltype.md)             | :heavy_check_mark:                                                                               | The type of the model                                                                            |
| `modelParameters`                                                                                | [operations.ResponseBodyModelParameters](../../models/operations/responsebodymodelparameters.md) | :heavy_check_mark:                                                                               | Model Parameters: Not all parameters apply to every model                                        |
| `provider`                                                                                       | [operations.ResponseBodyProvider](../../models/operations/responsebodyprovider.md)               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `messages`                                                                                       | [operations.ResponseBodyMessages](../../models/operations/responsebodymessages.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `integrationId`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | The id of the resource                                                                           |
| `version`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |