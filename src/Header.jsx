import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="app_icon">
          <img
            src="../public/phone.png"
            alt="phone icon"
            className="app_icon_img"
          />
          <h1 className="header_heading">Activity</h1>
        </div>

        <div className="inbox">Inbox</div>
        <div className="all_calls">All calls</div>
        <div className="filter_img">
          <img src="../public/filter.svg" alt="" />
        </div>
      </div>
      <hr className="hr_line" />
    </header>
  );
};

export default Header;
