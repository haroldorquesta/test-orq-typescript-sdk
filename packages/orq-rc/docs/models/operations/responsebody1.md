# ResponseBody1

Prompt model returned from the API

## Example Usage

```typescript
import { ResponseBody1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  owner: "<value>",
  domainId: "a40b3542-22fb-4f95-b277-c83d2805a288",
  createdById: "7124c491-391b-474d-aa1a-3e293f59279c",
  displayName: "Mckayla.Gusikowski",
  updatedById: "fbf7b26a-705a-467d-b49d-c3042048a639",
  promptConfig: {
    messages: [
      {
        role: "prompt",
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
      createdById: "875a2c06-96a0-4d14-8401-dcbb14000300",
      displayName: "Pink_Wyman",
      updatedById: "c44a9823-86f8-46f1-845d-c4d17a414756",
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