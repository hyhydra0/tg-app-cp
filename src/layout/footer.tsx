const Footer = () => {
  return (
    <div className="text-center py-[8px] text-[#B2B2B2] bg-primary_color">
      Copyright CPCoin {new Date().toDateString().slice(10)} powered by CP
      Ventures
    </div>
  );
};

export default Footer;
