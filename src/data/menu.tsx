import {
  BsFillPeopleFill,
  BsFillBagCheckFill,
  BsFillFileEarmarkRuledFill,
  BsFillHddRackFill,
  BsCart3,
  BsEmojiNeutralFill,
} from 'react-icons/bs';
import { FaHome, FaUserAstronaut } from 'react-icons/fa';
import { MdChangeCircle } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { SiReadthedocs } from 'react-icons/si';

export type MenuDataProps = {
  linkName: string;
  link: string;
  icon: React.ReactNode;
};

export const menuData = [
  {
    linkName: 'Home',
    link: '/',
    icon: <FaHome />,
  },
  {
    linkName: 'Clients',
    link: '/clients',
    icon: <BsFillPeopleFill />,
  },
  {
    linkName: 'Orders',
    link: '/orders',
    icon: <BsFillBagCheckFill />,
  },
  {
    linkName: 'Invoices',
    link: '/invoices',
    icon: <BsFillFileEarmarkRuledFill />,
  },
  {
    linkName: 'Posts',
    link: '/posts',
    icon: <BsFillHddRackFill />,
  },
  {
    linkName: 'Recursion',
    link: '/recursion',
    icon: <MdChangeCircle />,
  },
  {
    linkName: 'Children at bus',
    link: '/children',
    icon: <BsEmojiNeutralFill />,
  },
  {
    linkName: 'Cart',
    link: '/cart',
    icon: <BsCart3 />,
  },
  {
    linkName: 'Users',
    link: '/users',
    icon: <FaUserAstronaut />,
  },
  {
    linkName: 'Register',
    link: '/register',
    icon: <SiReadthedocs />,
  },
  {
    linkName: 'Login',
    link: '/login',
    icon: <FiLogIn />,
  },
];
export default menuData;
