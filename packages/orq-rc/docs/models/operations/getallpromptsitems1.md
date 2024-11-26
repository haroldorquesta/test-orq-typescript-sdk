# GetAllPromptsItems1

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "cf2820bf-9105-460d-87fe-8a5428175c6e",
  createdById: "e9184ba1-6e6b-41d8-af8c-fb95066d3b0e",
  displayName: "Heloise41",
  updatedById: "e4a60950-71a8-48ee-9b94-0153986cbb80",
  promptConfig: {
    messages: [
      {
        role: "exception",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  versions: [
    {
      id: "<id>",
      createdById: "0a408e00-9801-4d71-9295-0a0122c1272b",
      displayName: "Shanel.Steuber92",
      updatedById: "80b3ea44-2c74-4fc9-ac1a-5bfc9b740a27",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
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