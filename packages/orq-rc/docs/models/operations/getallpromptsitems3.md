# GetAllPromptsItems3

Prompt template model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems3 = {
  id: "<id>",
  owner: "vendor",
  domainId: "3aed31ff-572b-46c9-905c-baa9a98c5763",
  createdById: "05613335-2b51-4920-826b-a0c5a060d2a4",
  displayName: "Tom82",
  updatedById: "6e55ff3d-5fde-4943-a8ab-28638483e591",
  promptConfig: {
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "93dc3e0c-7d71-43f5-92c0-140fb8ca23d5",
      displayName: "Giovanny_Purdy67",
      updatedById: "636afa86-1729-4bf4-862e-dc0831c38837",
      promptConfig: {
        messages: [
          {
            role: "system",
            content: [
              {
                type: "text",
                text: "<value>",
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
  type: "template",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `owner`                                                                                                                              | *operations.GetAllPromptsItemsPromptsResponseOwner*                                                                                  | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `domainId`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdById`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `displayName`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedById`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `promptConfig`                                                                                                                       | [operations.GetAllPromptsItemsPromptsResponsePromptConfig](../../models/operations/getallpromptsitemspromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `metadata`                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponseMetadata](../../models/operations/getallpromptsitemspromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `created`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | The date and time the resource was created                                                                                           |
| `updated`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | The date and time the resource was last updated                                                                                      |
| `versions`                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponseVersions](../../models/operations/getallpromptsitemspromptsresponseversions.md)[]       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | [operations.GetAllPromptsItemsPromptsResponseType](../../models/operations/getallpromptsitemspromptsresponsetype.md)                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |