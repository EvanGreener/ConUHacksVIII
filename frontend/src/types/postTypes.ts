import { Comment } from "./commentTypes";
import { Sponsor } from "./sponsorTypes";

export type Post = {
  title: string;
  description: string;
  attachmentURL: string | undefined;
  createdTS: string;
  comments: Comment[];
  sponsors: Sponsor[];
};
