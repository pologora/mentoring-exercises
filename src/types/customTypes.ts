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
  id: string;
  paid: boolean;
};

export type TUser = {
  name: string;
  username: string;
  password: string;
  id: string;
};

export type TInvoice = {
  client: {
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
  orders: TOrder[];
  price: number;
  date: Date;
  month: string;
  id: string;
};

export type TCartItem = {
  id: string;
  title: string;
};
