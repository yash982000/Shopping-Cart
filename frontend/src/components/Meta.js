import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to The Solveware Co.",
  description:
    "Where we builds software solutions for various industries and types of organizations, from startups, to small medium businesses (SMBs) and large enterprises",
  keywords:
    "web development, mobile development, FinTech solutions, low prices ",
};

export default Meta;
