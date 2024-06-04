import React from 'react'
import { Link } from 'react-router-dom';
export function CardTwo(props) {
  // alert(props.image)
  return (
    <div className="mx-[1rem] z-10 bg-white rounded-md ">
      <img
        src={props.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg text-black font-semibold">{props.title}</h1>
        <p className="text-sm text-gray-600">
          {props.brief}
        </p>
        <h5 className="text-lg mt-1 text-black font-normal ">Description</h5>
        <p className=" text-sm text-gray-600">
          {props.description}
        </p>
        <Link to={`/machine/${props.id}/${props.subId}`}>
        <button
          type="button"
          className="mt-4 rounded-2xl bg-yellow-300 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read More
        </button>
        </Link>
      </div>
    </div>
  )
}
