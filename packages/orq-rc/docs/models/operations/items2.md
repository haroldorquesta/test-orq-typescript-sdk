# Items2

Prompt snippet model returned from the API

## Example Usage

```typescript
import { Items2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Items2 = {
  id: "<id>",
  owner: "vendor",
  domainId: "d8df1aff-9290-43f5-aa4f-b5c163a16485",
  createdById: "0a34cf5d-1ac2-46e1-a096-ce4679fb64f2",
  displayName: "Tiana36",
  updatedById: "aedde456-8a40-464f-8eda-58d1c0dc0a82",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://yellow-cardboard.org",
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
      createdById: "37c39211-506a-4611-842f-2c998f5c86f9",
      displayName: "Haylie25",
      updatedById: "79ffd5ea-60c8-4cbc-b4c8-7a014f25055f",
      promptConfig: {
        messages: [
          {
            role: "exception",
            content: "<value>",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `owner`                                                                                                                | *operations.ItemsOwner*                                                                                                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `domainId`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdById`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `displayName`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedById`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `promptConfig`                                                                                                         | [operations.GetAllPromptTemplatesItemsPromptConfig](../../models/operations/getallprompttemplatesitemspromptconfig.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | [operations.GetAllPromptTemplatesItemsMetadata](../../models/operations/getallprompttemplatesitemsmetadata.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `created`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | The date and time the resource was created                                                                             |
| `updated`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | The date and time the resource was last updated                                                                        |
| `versions`                                                                                                             | [operations.ItemsVersions](../../models/operations/itemsversions.md)[]                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `key`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [operations.GetAllPromptTemplatesItemsType](../../models/operations/getallprompttemplatesitemstype.md)                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |