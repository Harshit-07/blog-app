import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    {
      id: 4,
      title:
        "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      desc: "Consectetur proident consequat adipisicing nostrud sunt aliqua cillum sint sint eu proident",
      img: "https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_1280.jpg",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((item) => (
          <div className="post" key={item.id}>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${item.id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p>{item.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
