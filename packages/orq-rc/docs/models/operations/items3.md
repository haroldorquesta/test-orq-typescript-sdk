# Items3

Prompt template model returned from the API

## Example Usage

```typescript
import { Items3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Items3 = {
  id: "<id>",
  owner: "<value>",
  domainId: "6b870613-e3dc-4291-9bac-7e04b621d7eb",
  createdById: "58eb0beb-2725-4ee4-b59f-24d7e2855765",
  displayName: "Mose77",
  updatedById: "5cb2d777-997d-4a66-ac53-0ee1521e0f1d",
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
      createdById: "c5a87e8d-b0c3-4e05-a17d-425d231b64b5",
      displayName: "Raul.Wiza29",
      updatedById: "578de391-7557-4b1e-9b2f-8f38449ecb8e",
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
  type: "template",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `owner`                                                                                                                                              | *operations.GetAllPromptTemplatesItemsOwner*                                                                                                         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `domainId`                                                                                                                                           | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `createdById`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `displayName`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `updatedById`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `description`                                                                                                                                        | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `promptConfig`                                                                                                                                       | [operations.GetAllPromptTemplatesItemsPromptTemplatesPromptConfig](../../models/operations/getallprompttemplatesitemsprompttemplatespromptconfig.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `metadata`                                                                                                                                           | [operations.GetAllPromptTemplatesItemsPromptTemplatesMetadata](../../models/operations/getallprompttemplatesitemsprompttemplatesmetadata.md)         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `created`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_minus_sign:                                                                                                                                   | The date and time the resource was created                                                                                                           |
| `updated`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_minus_sign:                                                                                                                                   | The date and time the resource was last updated                                                                                                      |
| `versions`                                                                                                                                           | [operations.GetAllPromptTemplatesItemsVersions](../../models/operations/getallprompttemplatesitemsversions.md)[]                                     | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `type`                                                                                                                                               | [operations.GetAllPromptTemplatesItemsPromptTemplatesType](../../models/operations/getallprompttemplatesitemsprompttemplatestype.md)                 | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |