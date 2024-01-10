import {
  BsCart3,
  BsEmojiNeutralFill,
  BsFillBagCheckFill,
  BsFillFileEarmarkRuledFill,
  BsFillHddRackFill,
  BsFillPeopleFill,
} from 'react-icons/bs';
import { FaHome, FaUserAstronaut } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { MdChangeCircle } from 'react-icons/md';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { SiReadthedocs } from 'react-icons/si';

export type MenuDataProps = {
  linkName: string;
  link: string;
  icon: React.ReactNode;
};

export const menuData = [
  {
    icon: <FaHome />,
    link: '/',
    linkName: 'Home',
  },
  {
    icon: <BsFillPeopleFill />,
    link: '/clients',
    linkName: 'Clients',
  },
  {
    icon: <BsFillBagCheckFill />,
    link: '/orders',
    linkName: 'Orders',
  },
  {
    icon: <BsFillFileEarmarkRuledFill />,
    link: '/invoices',
    linkName: 'Invoices',
  },
  {
    icon: <BsFillHddRackFill />,
    link: '/posts',
    linkName: 'Posts',
  },
  {
    icon: <MdChangeCircle />,
    link: '/recursion',
    linkName: 'Recursion',
  },
  {
    icon: <BsEmojiNeutralFill />,
    link: '/children',
    linkName: 'Children at bus',
  },
  {
    icon: <BsCart3 />,
    link: '/cart',
    linkName: 'Cart',
  },
  {
    icon: <FaUserAstronaut />,
    link: '/users',
    linkName: 'Users',
  },
  {
    icon: <MdOutlineAccountBalanceWallet />,
    link: '/money',
    linkName: 'Account',
  },
  {
    icon: <SiReadthedocs />,
    link: '/register',
    linkName: 'Register',
  },
  {
    icon: <FiLogIn />,
    link: '/login',
    linkName: 'Login',
  },
];
export default menuData;
