import { Select } from "antd";
import React from "react";
import { amount, genre, language } from "../data/data";
import styles from "./selectors.module.css";

type SelectorsProps = {
  handleChange: (val: any, type: string) => void;
};
const Selectors: React.FC<SelectorsProps> = ({ handleChange }) => {
  return (
    <section>
      <h2 className={styles.title}>Choose your genre</h2>
      <Select
        className={styles.selector}
        onChange={(val) => handleChange(val, "genre")}
        options={genre}
      />

      <h2 className={styles.title}>Choose your language</h2>
      <Select
        className={styles.selector}
        onChange={(val) => handleChange(val, "language")}
        options={language}
      />

      <h2 className={styles.title}>Choose amount of names</h2>
      <Select
        className={styles.selector}
        onChange={(val) => handleChange(val, "amount")}
        options={amount}
      />
    </section>
  );
};

export default Selectors;
