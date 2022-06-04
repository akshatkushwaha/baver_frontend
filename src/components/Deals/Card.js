function Card(props) {
  return (
    <>
      <a href={`/${props.deal.category}`}>
        <div className="inline-block px-3">
          <div className="w-96 max-w-base overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={props.deal.image} alt="" />
            <div className="px-4 pb-4">
              <h2 className="text-xl font-bold text-cyan-800 p-4">
                {props.deal.category}
              </h2>
              <button className="rounded-r-full rounded-l-full border-2 py-2 px-4 hover:bg-orange-400">
                Browse
              </button>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
