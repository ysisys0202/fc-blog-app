import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import path from "constants/path";
import CATEGORIES from "constants/categories";
import Category from "types/category";
type TabType = "all" | "my" | Category;

const PostNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>(
    (searchParams.get("post-tab") as TabType) ?? "all"
  );
  function handleTabClick(tabName: TabType) {
    navigate(`${path.home}?post-tab=${tabName}`, { replace: true });
  }
  useEffect(() => {
    setActiveTab((searchParams.get("post-tab") as TabType) ?? "all");
  }, [searchParams]);
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
        {CATEGORIES.map((category) => (
          <li
            key={category}
            role="presentation"
            className={`post__navigation-item ${
              activeTab === category ? "post__navigation-item--active" : ""
            }`}
            onClick={handleTabClick.bind(null, category)}
          >
            {category}
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
