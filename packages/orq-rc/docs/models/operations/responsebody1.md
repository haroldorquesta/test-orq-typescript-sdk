# ResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { ResponseBody1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  owner: "vendor",
  domainId: "95d44877-2846-4bec-869b-652bd5c9c6b6",
  createdById: "874e6066-dc3d-4351-b0ae-7dcafc4cb613",
  displayName: "Delmer61",
  updatedById: "24b3d520-9d4e-4c09-8935-70226bd2caef",
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
  versions: [
    {
      id: "<id>",
      createdById: "3ef5dd99-9493-426b-89fa-22139de68c49",
      displayName: "Jasen.Koepp43",
      updatedById: "243bb919-1053-49eb-9cfa-99d6ca403b94",
      promptConfig: {
        messages: [
          {
            role: "prompt",
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `owner`                                                                                       | *operations.Owner*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `domainId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `promptConfig`                                                                                | [operations.ResponseBodyPromptConfig](../../models/operations/responsebodypromptconfig.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [operations.ResponseBodyMetadata](../../models/operations/responsebodymetadata.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |
| `versions`                                                                                    | [operations.Versions](../../models/operations/versions.md)[]                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.ResponseBodyType](../../models/operations/responsebodytype.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |