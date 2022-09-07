import * as React from "react";
import InfoCard from "./infocard.js";
import { locations } from "../db/locations";

export default function SideBar() {
  return (
    <>
      <div>
        {locations.map((data, key) => {
          return (
            <div key={key}>
              <InfoCard
                name={data.name}
                desc={data.desc}
                open={data.open}
                close={data.close}
                type={data.type}
                address={data.address}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
