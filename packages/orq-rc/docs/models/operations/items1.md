# Items1

Prompt model returned from the API

## Example Usage

```typescript
import { Items1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Items1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "44cf8f61-647a-47ee-9b72-6b41eb9cd7ee",
  createdById: "988f4fe7-dca5-43ad-b0a7-e5782bd040fa",
  displayName: "Justyn.Hirthe",
  updatedById: "5ef03103-7d37-4eac-a8f9-0369c6bc5fae",
  promptConfig: {
    messages: [
      {
        role: "prompt",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://normal-horde.org/",
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
      createdById: "1fe17bbe-c47b-4237-a4d9-5dcfd62d05ef",
      displayName: "Martine_Larkin34",
      updatedById: "3569b550-04ba-4ccd-abfe-990f2bd531b7",
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
  type: "prompt",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `owner`                                                                                                                                        | *operations.GetAllPromptTemplatesItemsPromptTemplatesOwner*                                                                                    | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `domainId`                                                                                                                                     | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdById`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `displayName`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `updatedById`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `description`                                                                                                                                  | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `promptConfig`                                                                                                                                 | [operations.ItemsPromptConfig](../../models/operations/itemspromptconfig.md)                                                                   | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `metadata`                                                                                                                                     | [operations.ItemsMetadata](../../models/operations/itemsmetadata.md)                                                                           | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `created`                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | The date and time the resource was created                                                                                                     |
| `updated`                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                  | :heavy_minus_sign:                                                                                                                             | The date and time the resource was last updated                                                                                                |
| `versions`                                                                                                                                     | [operations.GetAllPromptTemplatesItemsPromptTemplatesVersions](../../models/operations/getallprompttemplatesitemsprompttemplatesversions.md)[] | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `type`                                                                                                                                         | [operations.ItemsType](../../models/operations/itemstype.md)                                                                                   | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |