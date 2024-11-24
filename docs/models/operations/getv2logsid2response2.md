# GetV2LogsId2Response2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetV2LogsId2Response2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsId2Response2 = {
  type: "image_url",
  imageUrl: {
    url: "https://only-edge.com",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.GetV2LogsId2Response200ApplicationJSONType](../../models/operations/getv2logsid2response200applicationjsontype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `imageUrl`                                                                                                                     | [operations.GetV2LogsId2ResponseImageUrl](../../models/operations/getv2logsid2responseimageurl.md)                             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |