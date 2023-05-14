import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full p-3 text-black flex fixed justify-center bottom-0">
      <div className="flex items-center space-x-5 ">
        <Link to="/">
          <span className="text-orange-500 font-bold">
            Apply4Job <span className="text-xs text-gray-500">© 2023</span>
          </span>
        </Link>

        <ul className="flex space-x-4 align-bottom  text-gray-500  font-bold text-xs">
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Kullanıcı Anlaşması
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Gizlilik Politikası
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Topluluk Yönergeleri
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Çerez Politikası
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Telif Hakkı Politikası
          </li>
          <li className="hover:text-orange-400 hover:cursor-pointer">
            Geri Bildirim Gönder
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
