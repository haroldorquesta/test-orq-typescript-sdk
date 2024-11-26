# GetAllPromptsItems2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems2 = {
  id: "<id>",
  owner: "<value>",
  domainId: "dc337fad-d29f-417c-8f16-c9e189dd790b",
  createdById: "a8f26d8d-8ae0-4e2c-b95f-d43552eed7c5",
  displayName: "Suzanne_Kreiger23",
  updatedById: "6cad7180-63d2-476d-9879-3851c540045b",
  promptConfig: {
    messages: [
      {
        role: "correction",
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
      createdById: "20665c11-38be-4428-b4f0-3c68da9a1195",
      displayName: "Reginald2",
      updatedById: "0a3940a7-b080-42c3-8122-d9c4ae8d3f1c",
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