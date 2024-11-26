# GetAllPromptsItems1

Prompt model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItems1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItems1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "a3da3f3a-7b1f-4338-b570-3ce3c00622ad",
  createdById: "5ed87021-8a9d-4ad2-92e5-3efa6b025d40",
  displayName: "Dayne.Jacobi73",
  updatedById: "65ae2d90-c8c6-4a33-b58b-ad6e12a42e1f",
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
      createdById: "c097c067-26e7-4480-84ca-093fc2672bd0",
      displayName: "Ebba90",
      updatedById: "98c5ab92-fc79-4c7b-9c73-9880c86d34a6",
      promptConfig: {
        messages: [
          {
            role: "user",
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