import { useContext, useEffect, useState } from "react";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import api from "../api/axios";
import moment from "moment";
import { AuthContext } from "../context/authContext.js";

const Single = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  console.log("test");

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        {/* </div> */}
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          {/* </div> */}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
