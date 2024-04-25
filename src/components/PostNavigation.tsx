import React, { useState } from "react";

type TabType = "all" | "my";

const PostNavigation = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  function handleTabClick(tabName: TabType) {
    setActiveTab(tabName);
  }

  return (
    <nav className="post__navigation">
      <ul className="post__navigation-list">
        {TAB_LIST.map((tab) => (
          <li
            key={tab.nameEn}
            role="presentation"
            className={`post__navigation-item ${
              activeTab === tab.nameEn ? "post__navigation-item--active" : ""
            }`}
            onClick={handleTabClick.bind(null, tab.nameEn)}
          >
            {tab.nameKor}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const TAB_LIST: { nameEn: TabType; nameKor: string }[] = [
  {
    nameEn: "all",
    nameKor: "전체",
  },
  {
    nameEn: "my",
    nameKor: "나의 글",
  },
];

export default PostNavigation;
