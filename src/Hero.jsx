import "./hero.css";
import box from "/box.png";
import missed_phone from "/missed_phone.png";
import menu from "/menu.png";

const Hero = () => {
  return (
    <div>
      <section className="archive_section">
        <div className="archive_call">
          <img src={box} alt="box image " className="box_img" />
          <p className="archive_text">Archive all calls</p>
        </div>
      </section>

      <section className="date_section">
        <hr className="dotted_line" />
        <span className="date">July 21, 2002</span>
        <hr className="dotted_line" />
      </section>

      <section className="missed_section">
        <div className="missed_call">
          <img src={missed_phone} alt="box image " className="missed_img" />
          <div className="number_info">
            <h2 className="missed_number">+999999999999</h2>
            <p className="missed_text">tried ot call xavier</p>
          </div>
          <div className="time">
            <img src={menu} alt="" className="menu_img" />
            <span className="missed_text">45:45</span>
            <span className="missed_text time_value">pm</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
