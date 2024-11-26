# GetAllPromptsItems1

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "8e0d89f2-4379-4b06-9e7d-14b97ace7a6e",
  createdById: "6f05d759-6545-4ef1-bbaa-04b708dee873",
  displayName: "Polly69",
  updatedById: "e8a148e7-90f7-4258-823e-d14a40b35422",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://grandiose-coin.info",
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
      createdById: "7c83d280-5a28-48e7-8124-c491391b74da",
      displayName: "Marcia.Waelchi61",
      updatedById: "f59279c8-bd45-408f-abf7-b26a705a67d4",
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