import React from "react";
import { useSelector } from "react-redux";

export default function TopMenu({ title1, title2, status }) {
  const { user } = useSelector((state) => state.auth);
  const src =
    "https://media-exp1.licdn.com/dms/image/C4D03AQF4znssf1XDhQ/profile-displayphoto-shrink_200_200/0/1602291346737?e=1628121600&v=beta&t=__SW9d5f05KS9Tgl9_zkK6wmRj2vb419YMNpn8-Gofk";
  return (
    <div className="row px-4 pt-3">
      <div className="d-md-flex align-items-center w-100">
        <h3 className="text-dark">
          {title1 ? title1 : ""}
          <span className="text-success small h2">
            {status ? <i className="ml-2 fa fa-check"></i> : ""}
            {title2 ? title2 : ""}
          </span>
        </h3>
        <div className="ml-auto text-right">
          {user && user.first_name + " " + user.last_name}
          <img src={src} className="rounded-circle ml-2" height="40px" alt="" />
        </div>
      </div>
    </div>
  );
}
