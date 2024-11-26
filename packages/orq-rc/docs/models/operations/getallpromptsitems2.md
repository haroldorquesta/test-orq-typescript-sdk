# GetAllPromptsItems2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems2 = {
  id: "<id>",
  owner: "vendor",
  domainId: "2c95fd43-552e-4ed7-ac5d-e878316cad71",
  createdById: "063d276d-8793-4851-9c54-0045b5c95206",
  displayName: "Frank.Boyer",
  updatedById: "be4284f0-3c68-4da9-aa11-95fde290b0a3",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "a7b0802c-3122-4d9c-b4ae-8d3f1c318537",
      displayName: "Loraine.Yost71",
      updatedById: "ca9739d0-be94-45b5-9014-65c36dc35218",
      promptConfig: {
        messages: [
          {
            role: "tool",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://essential-tectonics.com",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  key: "<key>",
  type: "snippet",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `owner`                                                                                                              | *operations.GetAllPromptsItemsPromptsOwner*                                                                          | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `domainId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdById`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedById`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `promptConfig`                                                                                                       | [operations.GetAllPromptsItemsPromptsPromptConfig](../../models/operations/getallpromptsitemspromptspromptconfig.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `metadata`                                                                                                           | [operations.GetAllPromptsItemsPromptsMetadata](../../models/operations/getallpromptsitemspromptsmetadata.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `created`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was created                                                                           |
| `updated`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time the resource was last updated                                                                      |
| `versions`                                                                                                           | [operations.GetAllPromptsItemsPromptsVersions](../../models/operations/getallpromptsitemspromptsversions.md)[]       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `key`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.GetAllPromptsItemsPromptsType](../../models/operations/getallpromptsitemspromptstype.md)                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |