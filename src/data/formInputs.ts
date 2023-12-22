import type { FormValues } from '../components/Clients/ClientManagement';

export const formInputElements: {
  title: keyof FormValues;
  required: boolean;
}[] = [
  { title: 'name', required: true },
  { title: 'surname', required: true },
  { title: 'street', required: true },
  { title: 'post', required: true },
  { title: 'city', required: true },
  { title: 'phone', required: true },
  { title: 'region', required: false },
  { title: 'img', required: false },
];
