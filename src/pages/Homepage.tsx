import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + '/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log(posts);

  return <div>Homepage</div>;
};

export default Homepage;
