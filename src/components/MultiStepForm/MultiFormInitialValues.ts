import { TOrder } from '../../types/customTypes';

export const initialValues = {
  client: {
    id: '',
    imgSrc: '',
    name: '',
    phoneNumber: '',
    postCode: '',
    street: '',
    subRegion: '',
    surname: '',
    town: '',
  },
  date: new Date(),
  month: '',
  orders: [],
  price: 0,
};

export type MultiFormValuesType = {
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
};
