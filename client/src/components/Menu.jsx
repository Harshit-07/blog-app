import React from "react";
import "../style.scss";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title:
        "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      desc: "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      img: "https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_1280.jpg",
    },
    {
      id: 2,
      title:
        "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      desc: "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      img: "https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_1280.jpg",
    },
    {
      id: 3,
      title:
        "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      desc: "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      img: "https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_1280.jpg",
    },
    // {
    //   id: 4,
    //   title:
    //     "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
    //   desc: "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
    //   img: "https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_1280.jpg",
    // },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((item) => (
        <div className="post" key={item.id}>
          <img src={item.img} alt="" />
          <h2>{item.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
