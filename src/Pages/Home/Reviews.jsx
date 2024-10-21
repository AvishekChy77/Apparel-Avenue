const Reviews = () => {
  return (
    <div className="my-20">
      <h2 className="text-center font-bold text-xl md:text-2xl lg:text-4xl text-[#016A70]">
        Reviews
      </h2>
      <div className="mt-10 flex gap-5 flex-col md:flex-row">
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-[#016A70]">
            Fantastic Fit and Style
          </h2>
          <p className=" flex-grow text-black">
            {`"I was pleasantly surprised by the perfect fit and stylish design of
            these jeans. They are now my go-to choice for both casual and
            semi-formal occasions."`}
          </p>
          <p className="text-[#016A70]">THAD J.</p>
        </div>
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-[#016A70]">
            Cozy and Comfortable
          </h2>
          <p className=" flex-grow text-black">
            {`"The Long Sleeve Thermal Henley is incredibly cozy and comfortable.
            It keeps me warm in colder weather without sacrificing style. A
            must-have for fall and winter!"`}
          </p>
          <p className="text-[#016A70]">Rena A.</p>
        </div>
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-[#016A70]">
            Timeless Vintage Style
          </h2>
          <p className=" flex-grow text-black">
            {`"I love the Vintage Relaxed Fit Sherpa Trucker Jacket. It's a
            classic with a vintage twist. The relaxed fit and cozy lining make
            it ideal for everyday wear."`}
          </p>
          <p className="text-[#016A70]">M. Jordan</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
