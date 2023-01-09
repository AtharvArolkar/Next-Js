import Layout from "../components/Layout";

export default function Charity() {
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
          {[
            { alpha: "A", name: "Aspen Education Foundation" },
            { alpha: "B", name: "Bspen Education Foundation" },
            { alpha: "C", name: "Cspen Education Foundation" },
            { alpha: "H", name: "Hspen Education Foundation" },
            { alpha: "X", name: "Xspen Education Foundation" },
            { alpha: "Y", name: "Yspen Education Foundation" },
          ].map((charity) => {
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
