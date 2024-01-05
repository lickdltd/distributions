import { TNewReleaseMessage } from "../../../../types/ddex/v4/newReleaseMessage";
import { resourceList } from "./resourceList";

export const newReleaseMessage = (object: any): TNewReleaseMessage => {
  return {
    resourceList: resourceList(object.ResourceList[0] || {}),
  };
};
