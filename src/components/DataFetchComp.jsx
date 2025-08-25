import { useEffect, useState } from "react";

const DataFetchComp = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/comments")
        .then((res) => res.json())
        .then((res) => setComments(res.comments))
        .catch((error) => {
          console.log(error.message);
        });
    };
    fetchData();
  }, []);

  if (comments) {
    comments.splice(9, comments.length);
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-md:grid-cols-1">
        {comments.map((comment) => (
          <div key={comment.user} className="mb-3 p-3 border rounded">
            <img src="/Frame 15.png" alt="" />
            <h2 className="font-normal text-[15px] mt-5 font-space">
              “We struggled for years to find an IT <br />
              company that we could trust. While others <br /> would try to sell
              us IT solutions. We actually <br /> took the time to listen to
              what made us <br /> unique as a business.”{comment.body}
            </h2>
            {/* <p>{comment.body}</p> */}
            <div className="flex gap-5 mt-5">
              <img src="/Frame 1000008343.png" alt="user jpg" />
              <small className="text-black mt-10 font-space font-bold uppercase">
                {comment.user.username}
                {comment.user.fullname}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetchComp;
