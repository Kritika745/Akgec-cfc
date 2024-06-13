import React from 'react'
import { Link } from 'react-router-dom';

export function CardTwo(props) {
  return (
    <div className="mx-2 h-[500px] z-10 bg-white rounded-md ">
      <img
        src={props.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="px-4 py-2">
        <h1 className="text-lg text-black font-semibold">{props.title}</h1>
        <p className="text-sm text-gray-600">
          {props.brief}
        </p>
        <h5 className="text-lg mt-1 text-black font-normal">Description</h5>
        <p className=" text-sm text-gray-600 text-justify">
          {props.description}
        </p>
        <Link to={`/machine/${props.id}/${props.subId}`}>
          <button
            type="button"
            className="absolute bottom-4 rounded-2xl bg-[#FBDD07] px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}