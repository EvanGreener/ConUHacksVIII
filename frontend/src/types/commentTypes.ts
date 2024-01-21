export type Comment = {
  uid: string;
  pid: string;
  parentComment: string | null;
  text: string;
};
