export type Comment = {
  uid: string;
  postId: string;
  parentComment: string | null;
  text: string;
};
