export type TClient = {
  id: string;
  imgSrc?: string;
  name: string;
  surname: string;
  street: string;
  postCode: string;
  town: string;
  subRegion?: string;
  phoneNumber: string;
};

export type TOrder = {
  client: string;
  quantity: number;
  title: string;
  content: string;
  id?: number;
};
