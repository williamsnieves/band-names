import { Spin, List } from "antd";
import useBandNames from "../hooks/band-names";
import { ReactNode } from "react";

type BrandNamesProps = {
  genre?: string;
  amount?: string;
  language?: string;
};

const BrandNames: React.FC<BrandNamesProps> = ({ genre, amount, language }) => {
  const { bandNames, isLoading } = useBandNames({ genre, amount, language });

  const names = bandNames.hasOwnProperty("response")
    ? bandNames.response.trim().replace(".", "").split(",")
    : [];

  return isLoading ? (
    <Spin size="large" />
  ) : (
    <List
      style={{ marginTop: "2rem" }}
      itemLayout="horizontal"
      dataSource={names}
      renderItem={(item: ReactNode, index: number) => (
        <List.Item style={{ color: "white" }}>
          {index + 1}. {item}
        </List.Item>
      )}
    />
  );
};

export default BrandNames;
