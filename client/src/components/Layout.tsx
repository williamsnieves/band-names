import { Select, Button } from "antd";
import React from "react";
import BrandNames from "./BandNames";
import { amount, genre, language } from "../data/data";
import Header from "./Header";
import Selectors from "./Selectors";

const Layout = () => {
  const [query, setQuery] = React.useState<{
    genre?: string;
    language?: string;
    amount?: string;
  }>({});
  const [showBrandNames, setShowBrandNames] = React.useState(false);

  const showGenerateButton = query.genre && query.language && query.amount;

  return (
    <main>
      <Header />
      <Selectors
        handleChange={(value, type) => setQuery({ ...query, [type]: value })}
      />
      {showGenerateButton ? (
        <Button
          style={{ marginTop: "2rem", width: "100%" }}
          type="primary"
          onClick={() => setShowBrandNames(true)}
        >
          Generate
        </Button>
      ) : null}

      {showBrandNames ? (
        <BrandNames
          genre={query.genre}
          amount={query.amount}
          language={query.language}
        />
      ) : null}
    </main>
  );
};

export default Layout;
