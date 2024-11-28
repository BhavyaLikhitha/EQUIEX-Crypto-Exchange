import React, { useState } from "react";
import "./coininfo.css";
import "../../../pages/coinpage.scss";

interface CoinInfoProps {
  heading: string; // Type for the heading prop
  desc: string; // Type for the description prop
}

const CoinInfo: React.FC<CoinInfoProps> = ({ heading, desc }) => {
  const shortdesc = `${desc.slice(0, 300)}<p style='color:var(--magenta)'>Read More...</p>`;
  const longdesc = `${desc}<p style='color:var(--magenta)'>Read Less...</p>`;
  const [flag, setFlag] = useState(false);

  return (
    <div className="wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 300 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortdesc : longdesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
