import type { FC } from "react";
import { GithubOutlined } from "@ant-design/icons";
import { DefaultFooter } from "@ant-design/pro-layout";

const Footer: FC = () => {
  const defaultMessage = "蚂蚁集团体验技术部出品";

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        backgroundColor: "inherit",
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: "Ant Design Pro",
          title: "Ant Design Pro",
          href: "https://pro.ant.design",
          blankTarget: true,
        },
        {
          key: "github",
          title: <GithubOutlined />,
          href: "https://github.com/ant-design/ant-design-pro",
          blankTarget: true,
        },
        {
          key: "Ant Design",
          title: "Ant Design",
          href: "https://ant.design",
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
