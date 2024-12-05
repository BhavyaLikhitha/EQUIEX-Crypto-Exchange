import React, { useState } from "react";
import "./coininfo.css";
import "../../../pages/coinpage.scss";

// Define the interface for props accepted by the component
interface CoinInfoProps {
  heading: string; // Type for the heading prop
  desc: string; // Type for the description prop
}

const CoinInfo: React.FC<CoinInfoProps> = ({ heading, desc }) => {
  // Define a shortened description (first 300 characters) with a "Read More" option
  const shortdesc = `${desc.slice(0, 300)}<p style='color:var(--magenta)'>Read More...</p>`;

  // Define the full description with a "Read Less" option
  const longdesc = `${desc}<p style='color:var(--magenta)'>Read Less...</p>`;

  // `flag` state determines whether the full description or shortened version is displayed
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
