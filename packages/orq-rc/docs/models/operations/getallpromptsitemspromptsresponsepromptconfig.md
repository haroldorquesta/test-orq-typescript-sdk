# GetAllPromptsItemsPromptsResponsePromptConfig

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsResponsePromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItemsPromptsResponsePromptConfig = {
  messages: [
    {
      role: "correction",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://humble-sustenance.com/",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `stream`                                                                                                                                   | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `model`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `modelDbId`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The id of the resource                                                                                                                     |
| `modelType`                                                                                                                                | [operations.GetAllPromptsItemsPromptsResponseModelType](../../models/operations/getallpromptsitemspromptsresponsemodeltype.md)             | :heavy_minus_sign:                                                                                                                         | The type of the model                                                                                                                      |
| `modelParameters`                                                                                                                          | [operations.GetAllPromptsItemsPromptsResponseModelParameters](../../models/operations/getallpromptsitemspromptsresponsemodelparameters.md) | :heavy_minus_sign:                                                                                                                         | Model Parameters: Not all parameters apply to every model                                                                                  |
| `provider`                                                                                                                                 | [operations.GetAllPromptsItemsPromptsResponseProvider](../../models/operations/getallpromptsitemspromptsresponseprovider.md)               | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `integrationId`                                                                                                                            | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The id of the resource                                                                                                                     |
| `version`                                                                                                                                  | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `messages`                                                                                                                                 | [operations.GetAllPromptsItemsPromptsResponseMessages](../../models/operations/getallpromptsitemspromptsresponsemessages.md)[]             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |