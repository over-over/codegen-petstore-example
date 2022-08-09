export type TPetData = {
  id: number;
} & TPetInfo;

export type TPetInfo = {
  photoURL?: string;
  name: string;
  category: string;
  status: string;
};
