import { Post } from "./postTypes";

export type User = {
  uid: string;
  firstName: string;
  lastName: string;
  introduction: string;
  fieldOfReasearch: string | undefined;
  locationType: string | undefined;
  locationName: string | undefined;
  education: string | undefined;
  occupation: string | undefined;
  posts: Post | undefined;
};
