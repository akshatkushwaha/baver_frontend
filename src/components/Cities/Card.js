function Card(props) {
  return (
    <div className="break-inside-avoid relative bg-fixed w-fit h-fit mb-4 overflow-hidden rounded-lg">
      <img className="m-auto" src={props.place.image} alt={props.place.name} />
      <div className="absolute top-0 h-full w-full flex flex-col justify-end py-10 bg-gradient-to-t from-gray-900">
        <h1 className="text-white text-5xl font-sans font-bold">
          {props.place.name}
        </h1>
        <p className="text-lg text-white">{props.place.description}</p>
      </div>
    </div>
  );
}

export default Card;
