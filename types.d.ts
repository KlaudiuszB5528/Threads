interface IUser {
  _id: string;
  id: string;
  username: string;
  name: string;
  image: string;
  bio: string;
  threads: IThread[];
  onboarded: boolean;
  communities: any[];
}

interface IThread {
  _id: string;
  text: string;
  author: IUser;
  community?: any;
  createdAt: string;
  parentId: string;
  children: IThread[];
}
