import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Charity() {
  const [charityData, setCharityData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/charities")
      .then((res) => {
        setCharityData(res.data);
        localStorage.setItem("charities", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    if (navigator.onLine) {
      console.log('Currently online -> Charity');
    } else {
      setCharityData(JSON.parse(localStorage.getItem("charities")));
    }
  }, []);

  return (
    <Layout>
      <div>
        <h4>Cause partners</h4>
        <h5>
          At Olivela, every purchase has purpose—and when you shop with us, you
          have the power to decide what that purpose is. Explore our list of
          cause partners that align with our core pillars and, more importantly,
          choose the ones that align with yours.
        </h5>
        <div>
          {charityData.map((charity) => {
            return (
              <div className="flex m-10 items-center" key={charity.alpha}>
                <h4>{charity.alpha}</h4>
                <p className="ml-5">{charity.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
