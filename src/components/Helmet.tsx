import React from "react";
import { Helmet } from "react-helmet-async";

interface HelmetProps {
  title: string;
}

const HelmetComponent: React.FC<HelmetProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
