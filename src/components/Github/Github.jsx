import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch("https://api.github.com/users/Ashishmaurya-12/followers")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    })
  return (
    <div className="text-center m-5 font-bold bg-gray-600 text-white p-4 rounded-lg">
      Github Followers: {data.followers}
    </div>
  )
}

export default Github
