import style from './Footer.module.css';

type FooterProps = {
  footerData: {
    [key: string]: string;
  };
};

const Footer = ({ footerData }: FooterProps) => {
  const renderElements = Object.keys(footerData).map((key) => (
    <div key={key}>
      <a href={footerData[key]}>{key}</a>
    </div>
  ));

  return <div className={style.footer}>{renderElements}</div>;
};
export default Footer;
