import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import image1 from "../../image/instagram.jpg";
import image2 from "../../image/twitter.jpg";
import image3 from "../../image/notebook.jpg";
import image4 from "../../image/youtube.jpg";
import image5 from "../../image/eccomerce.jpg";
import "./style.css";
const portfolioData = [
  {
    id: 3,
    name: "Eccomerce",
    image: image1,
  },
  {
    id: 2,
    name: "Note App",
    image: image2,
  },
  {
    id: 3,
    name: "TwitterClone",
    image: image3,
  },
  {
    id: 2,
    name: "instagram",
    image: image4,
  },
  {
    id: 3,
    name: "Youtube",
    image: image5,
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState(1);
  const [hover, setHover] = useState(null);
  const handleHover = (id) => {
    setHover(id);
  };
  console.log("hover", hover);
  const handleFilter = (id) => {
    setFilter(id);
  };
  console.log("ffilter id", filter);
  const filterItem =
    filter === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filter);
  console.log(filterItem);

  const options = [
    {
      id: 1,
      label: "All",
    },
    {
      id: 2,
      label: "Development",
    },
    {
      id: 3,
      label: "Design",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText={"Portfolio"}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {options.map((item) => (
            <li
              className={item.id === filter ? "active" : ""}
              key={item.id}
              onClick={() => handleFilter(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filterItem.length > 0 &&
            filterItem.map((item, i) => (
              <div
                className="portfolio_content_cards_item"
                key={i}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio_content_cards_item_img_wrapper">
                  <a>
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {i === hover && (
                    <div>
                      <h5>{item.name}</h5>
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
