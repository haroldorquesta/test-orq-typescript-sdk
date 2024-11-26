# GetAllPromptsItems3

Prompt template model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "663ccb0e-50ab-4a6d-b58e-b1ced7d14d06",
  createdById: "717b5ef2-1472-43eb-b9b0-2bbd986dd760",
  displayName: "Margarita_Labadie87",
  updatedById: "d814ae19-a4c1-4308-b41e-3949ab40dfe1",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://regal-obligation.name",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "2dcfc9ea-429b-4d4e-b9bc-e46ed67b0538",
      displayName: "Breana48",
      updatedById: "b034fca1-c22d-401e-b4ca-1c3b68f44459",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
            content: "<value>",
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