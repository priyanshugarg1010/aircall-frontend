import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <hr className="hr_line" />
      <div className="footer">
        <div className="">
          <img src="../public/phone-call.png" alt="" className="img" />
        </div>
        <div className="">
          <img src="../public/user.png" alt="" className="img" />
        </div>
        <div className="dial">
          <img src="../public/dial.png" alt="" className="dial_img" />
        </div>
        <div className="">
          <img src="../public/settings.png" alt="" className="img" />
        </div>
        <div className="">
          <img src="../public/function.png" alt="" className="img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
