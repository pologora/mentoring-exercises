import { ClientFormValues } from '../yupValidationScheemas/clientValidationScheema';

export const formInputElements: {
  title: keyof ClientFormValues;
  required: boolean;
}[] = [
  { title: 'name', required: true },
  { title: 'surname', required: true },
  { title: 'street', required: true },
  { title: 'postCode', required: true },
  { title: 'town', required: true },
  { title: 'phoneNumber', required: true },
  { title: 'subRegion', required: false },
  { title: 'imgSrc', required: false },
];
