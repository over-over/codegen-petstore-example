export type TPetData = {
  id: string;
} & TPetInfo;

export type TPetInfo = {
  id: string;
  photoURL?: string;
  name: string;
  category: string;
  status: string;
};
