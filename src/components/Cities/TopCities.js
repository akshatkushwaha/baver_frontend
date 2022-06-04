import Card from "./Card";

function TopCities(props) {
  const placeData = [
    {
      name: "Indore",
      image:
        "https://getinfocity.com/wp-content/uploads/2017/04/Rajwada-mall-in-indore.jpg",
      description: "Get all listing",
    },
    {
      name: "Bhopal",
      image:
        "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJob3BhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Get all listing",
    },
    {
      name: "Gwalior",
      image: "https://www.holidify.com/images/bgImages/GWALIOR.jpg",
      description: "Get all listing",
    },
    {
      name: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Get all listing",
    },
    {
      name: "Delhi",
      image: "https://www.holidify.com/images/bgImages/DELHI.jpg",
      description: "Get all listing",
    },
    {
      name: "Bangalore",
      image: "https://www.holidify.com/images/bgImages/BANGALORE.jpg",
      description: "Get all listing",
    },
  ];
  return (
    <>
      <section className="py-4 md:py-8 px-2 flex flex-col justify-center items-center">
        <div className="container relative text-center py-4 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold">
            Top Cities <span className="text-orange-400">Listing</span>
          </h1>
          <p className="text-lg font-sans py-2">
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
            Blanditiis.
          </p>
        </div>
        <div className="columns-1 md:columns-3 w-full md:w-3/4 text-center">
          {placeData.map((place, index) => (
            <Card key={index} place={place} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TopCities;
