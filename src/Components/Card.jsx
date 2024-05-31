import React from 'react'

export function CardTwo(props) {
  return (
    <div className="mx-[1rem] z-10 bg-white rounded-md ">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <p className="text-sm text-gray-600">
          {props.brief}
        </p>
        <h5 className="text-lg mt-1 font-normal ">Description</h5>
        <p className=" text-sm text-gray-600">
          {props.description}
        </p>
        <button
          type="button"
          className="mt-4 rounded-2xl bg-yellow-300 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read More
        </button>
      </div>
    </div>
  )
}
