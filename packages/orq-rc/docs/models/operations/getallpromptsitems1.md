# GetAllPromptsItems1

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "7a214ea3-9a8c-403f-a714-09f99538e096",
  createdById: "d736216a-4eba-4b0d-8e09-a3da3f3a7b1f",
  displayName: "Dakota.Heller3",
  updatedById: "ce3c0062-2adc-45ed-8870-218a9dad22e5",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://robust-advertisement.com/",
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
      createdById: "5d406306-5b16-45ae-b2d9-0c8c6a3358ba",
      displayName: "Herta.Brekke68",
      updatedById: "2e1fdda3-c097-4c06-b726-e74804ca093f",
      promptConfig: {
        messages: [
          {
            role: "assistant",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      commit: "<value>",
      timestamp: "<value>",
    },
  ],
  type: "prompt",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `owner`                                                                                                | *operations.GetAllPromptsItemsOwner*                                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `domainId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdById`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedById`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `promptConfig`                                                                                         | [operations.GetAllPromptsItemsPromptConfig](../../models/operations/getallpromptsitemspromptconfig.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [operations.GetAllPromptsItemsMetadata](../../models/operations/getallpromptsitemsmetadata.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `created`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The date and time the resource was created                                                             |
| `updated`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The date and time the resource was last updated                                                        |
| `versions`                                                                                             | [operations.GetAllPromptsItemsVersions](../../models/operations/getallpromptsitemsversions.md)[]       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.GetAllPromptsItemsType](../../models/operations/getallpromptsitemstype.md)                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |