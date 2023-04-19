import Marketplace from "components/Marketplace/Marketplace";
import React from "react";

type Props = {};

const PageMarketplace = (props: Props) => {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <Marketplace boxCard="box3" />
      </div>
    </div>
  );
};

export default PageMarketplace;
