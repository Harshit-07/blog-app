import React from "react";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/31800279/pexels-photo-31800279/free-photo-of-charming-lisbon-street-with-historic-tram.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
        {/* </div> */}
        <div className="user">
          <img src="https://images.pexels.com/photos/31047866/pexels-photo-31047866/free-photo-of-scarlet-backed-flowerpecker-on-vibrant-blossoms.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
          {/* </div> */}
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Do deserunt consectetur aute tempor.</h1>
        <p>
          <p>
            Ad aliquip sunt duis occaecat aute est ipsum. Elit pariatur nisi ea
            est aliquip veniam labore est laboris. Laborum minim excepteur
            deserunt id duis fugiat. Magna excepteur do reprehenderit velit
            eiusmod amet. Nisi est duis ullamco quis do qui esse proident amet
            officia minim. Eu qui eiusmod laboris est proident ad pariatur duis.
            Do eiusmod exercitation ex aliquip id. Irure pariatur excepteur
            eiusmod ipsum cillum deserunt esse consectetur commodo duis nisi
            cupidatat. Veniam consequat dolore mollit ad aute do dolore proident
            fugiat ea commodo aliqua dolore. Minim minim labore qui nulla est
            nostrud incididunt consequat eu veniam fugiat. Sit quis adipisicing
            deserunt occaecat Lorem sint ut elit amet consectetur minim irure
            labore consectetur. Amet nisi excepteur tempor amet sint id
            exercitation dolor quis excepteur commodo. Reprehenderit sint
            voluptate minim veniam cillum adipisicing officia anim fugiat et.
            Non do labore anim anim duis consequat. Sunt non veniam ad pariatur
            occaecat tempor ex ex mollit. Adipisicing sit id laborum laborum
            laborum mollit deserunt cupidatat est Lorem consectetur mollit
            ullamco
          </p>
          <p>
            Nostrud veniam aute nostrud ipsum est deserunt quis mollit aute
            consectetur minim pariatur sit. Consequat ut do laboris fugiat velit
            veniam dolor ea id sunt. Sint sint adipisicing officia aute elit. Eu
            sit occaecat aliquip sit sunt excepteur nisi irure sunt. Pariatur
            aliquip laborum pariatur aute deserunt pariatur nulla cillum non
            veniam ut officia. Consequat nisi occaecat deserunt nostrud eu aute
            esse. Reprehenderit culpa occaecat do nisi. Ad Lorem occaecat
            voluptate consectetur consequat quis sunt reprehenderit eu
            incididunt. Qui ut adipisicing incididunt aliqua in ea.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
