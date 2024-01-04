import "./footer.css";
import functionimg from "/function.png";
import setting from "/settings.png";
import dial from "/dial.png";
import phone_call from "/phone-call.png";
import user from "/user.png";

const Footer = () => {
  return (
    <footer>
      <hr className="hr_line" />
      <div className="footer">
        <div className="">
          <img src={phone_call} alt="" className="img" />
        </div>
        <div className="">
          <img src={user} alt="" className="img" />
        </div>
        <div className="dial">
          <img src={dial} alt="" className="dial_img" />
        </div>
        <div className="">
          <img src={setting} alt="" className="img" />
        </div>
        <div className="">
          <img src={functionimg} alt="" className="img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
