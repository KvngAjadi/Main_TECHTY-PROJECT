import { useEffect, useState } from "react";

const DataFetchComp = () => {
    const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/comments")
        .then(res => res.json())
        .then(res => setComments(res.comments))
        .catch((error)=>{
          console.log(error.message)
        })
    }
        fetchData()
  }, []);

  if(comments){
    comments.splice(9, comments.length)
  }

  return (
    <div className="h-screen">
        <div className="grid grid-cols-3 gap-5">
      {comments.map((comment) => (
        <div key={comment.user} className="mb-3 p-3 border rounded">
            <img src="/Frame 15.png" alt="" />
          <h2 className="font-normal text-[15px] mt-5 font-space">“We struggled for years to find an IT <br />company that we could trust. While others <br /> would try to sell us IT solutions. We actually <br /> took the time to listen to what made us <br /> unique as a business.”{comment.body}</h2>
          {/* <p>{comment.body}</p> */}
          <small className="text-black mt-10 font-space font-bold uppercase">{comment.user.username}{comment.user.fullname}</small>
        </div>
      ))}
        </div>
    </div>
    )
};

export default DataFetchComp;
