import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json'; 
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl md:px-20 px-4  dark:bg-slate-900 dark:text-white  ">
        <div className="pt-20 items-center justify-center text-center  ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>

          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            repudiandae tempora distinctio deserunt modi dolor voluptatem
            voluptates perspiciatis, temporibus esse nam voluptatibus corporis
            itaque, maiores eligendi cumque? Maiores nemo cumque provident ut
            harum explicabo architecto delectus magnam laborum tempore
            aspernatur, commodi dolor iusto aperiam illo assumenda labore
            excepturi quod ipsum vel similique eaque eos ullam natus. Nostrum
            saepe pariatur, facilis modi possimus odio eligendi, veritatis sed
            est recusandae molestias. Facere aspernatur aliquam alias qui
            necessitatibus!
          </p>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;



