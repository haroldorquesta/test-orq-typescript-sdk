# GetAllPromptsItemsPromptsPromptConfig

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsPromptConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItemsPromptsPromptConfig = {
  messages: [
    {
      role: "tool",
      content: [
        {
          type: "image_url",
          imageUrl: {
            url: "https://lucky-tenant.biz",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `stream`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `model`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `modelDbId`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The id of the resource                                                                                                     |
| `modelType`                                                                                                                | [operations.GetAllPromptsItemsPromptsModelType](../../models/operations/getallpromptsitemspromptsmodeltype.md)             | :heavy_minus_sign:                                                                                                         | The type of the model                                                                                                      |
| `modelParameters`                                                                                                          | [operations.GetAllPromptsItemsPromptsModelParameters](../../models/operations/getallpromptsitemspromptsmodelparameters.md) | :heavy_minus_sign:                                                                                                         | Model Parameters: Not all parameters apply to every model                                                                  |
| `provider`                                                                                                                 | [operations.GetAllPromptsItemsPromptsProvider](../../models/operations/getallpromptsitemspromptsprovider.md)               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `integrationId`                                                                                                            | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The id of the resource                                                                                                     |
| `version`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `messages`                                                                                                                 | [operations.GetAllPromptsItemsPromptsMessages](../../models/operations/getallpromptsitemspromptsmessages.md)[]             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |