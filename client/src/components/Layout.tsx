import { Select, Button } from "antd";
import React from "react";
import logo from "../assets/logo.png";
import BrandNames from "./BandNames";

const Layout = () => {
  const [query, setQuery] = React.useState<{
    genre?: string;
    language?: string;
    amount?: string;
  }>({});
  const [showBrandNames, setShowBrandNames] = React.useState(false);

  console.log("query", query);

  const handleChange = (value: any, type: string) => {
    console.log(`selected ${value}`);
    setQuery({ ...query, [type]: value });
  };

  const showGenerateButton = query.genre && query.language && query.amount;

  return (
    <main>
      <header className="App-header">
        <img src={logo} width={300} style={{ borderRadius: "10%" }} />
      </header>
      <section>
        <h2 style={{ textAlign: "left", marginBottom: 0 }}>
          Choose your genre
        </h2>
        <Select
          style={{ width: "100%" }}
          onChange={(val) => handleChange(val, "genre")}
          options={[
            { value: "rock", label: "Rock" },
            { value: "pop", label: "Pop" },
            { value: "jazz", label: "Jazz" },
            { value: "blues", label: "Blues" },
            { value: "hiphop", label: "Hip-hop" },
            { value: "country", label: "Country" },
            { value: "R&B", label: "R&B" },
            { value: "electronic", label: "Electronic" },
            { value: "reggae", label: "Reggae" },
            { value: "classical", label: "classical" },
            { value: "regueton", label: "Regueton" },
            { value: "indie pop/rock", label: "Indie pop/rock" },
            { value: "edm", label: "EDM" },
          ]}
        />

        <h2
          style={{
            textAlign: "left",
            marginBottom: 0,
            borderTop: "1px solid gray",
            paddingTop: "10px",
          }}
        >
          Choose your language
        </h2>
        <Select
          style={{ width: "100%" }}
          onChange={(val) => handleChange(val, "language")}
          options={[
            { value: "english", label: "English" },
            { value: "spanish", label: "Spanish" },
            { value: "japanese", label: "Japanese" },
          ]}
        />

        <h2
          style={{
            textAlign: "left",
            marginBottom: 0,
            borderTop: "1px solid gray",
            paddingTop: "10px",
          }}
        >
          Choose amount of names
        </h2>
        <Select
          style={{ width: "100%" }}
          onChange={(val) => handleChange(val, "amount")}
          options={[
            { value: "1", label: "One" },
            { value: "2", label: "Two" },
            { value: "3", label: "Three" },
            { value: "4", label: "Four" },
            { value: "5", label: "Five" },
            { value: "6", label: "Six" },
            { value: "7", label: "Seven" },
            { value: "8", label: "Eight" },
            { value: "9", label: "Nine" },
            { value: "10", label: "Ten" },
          ]}
        />
      </section>
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
