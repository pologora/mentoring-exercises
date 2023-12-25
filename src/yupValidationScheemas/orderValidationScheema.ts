import * as yup from 'yup';

export default yup.object({
  client: yup.string().required(),
  quantity: yup.number().required().min(1).max(15),
  title: yup.string().required().min(5),
  content: yup.string().required().min(10),
});
