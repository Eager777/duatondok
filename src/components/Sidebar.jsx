const Sidebar = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="../public/images/profile.jpeg"
            alt=" Eager Duatondok"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Eager Duatondok <br />
            Palangan
          </h1>

          <p className="title">Mahasiswa</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Tempat & Tanggal Lahir</p>

              <time dateTime="1982-06-23">Makale, 21 Juli 1998</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Alamat</p>

              <address>Klabat Residence No d 305</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
