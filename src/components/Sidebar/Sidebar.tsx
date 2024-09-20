import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./SidebarStyle.css";

function Sidebar() {
  const [subscribe, setSubscribe] = useState([]);
  useEffect(() => {
    const fetchSubscribe = async () => {
      const data = await fetch("http://localhost:3000/subscribe?user_id=2");
      // console.log(data);
      const json = await data.json();
      setSubscribe(json);
    };
    fetchSubscribe();
  }, []);
  return (
    <section id="side">
      <div className="-side-pmr">
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          {/* <div className="-text">หน้าแรก</div> */}
          <Link to="/" className="-text">หน้าแรก</Link>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">Shots</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">การติตตาม</div>
        </a>
        {/* <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a>
        <a href="#!" className="-item">
          <div className="-icon">
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div className="-text">หน้าแรก</div>
        </a> */}
      </div>
      <div className="-side-sec">
        <div className="-text">การติดตาม</div>
        {subscribe.map((sub, index) => (
          <a key={index} href="#" className="-item">
            <div className="-icon">
              <img src={sub.channel_profile_picture} alt="" />
            </div>
            <div className="-text">{sub.channel_name}</div>
            <div className="-status"></div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Sidebar;
