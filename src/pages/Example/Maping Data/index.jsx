import CardEvent from "../../components/CardEvent";
function Landing() {
  const data = [
    { id: 1, name: "Tea", category: "Drink" },
    { id: 2, name: "Milk", category: "Drink" },
    { id: 3, name: "Coffee", category: "Drink" },
  ];

  return (
    <>
      {/* {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <hr />
          <h3>{item.category}</h3>
        </div>
      ))} */}

      <main className="container d-flex gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <CardEvent item={item} />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </main>
      <div className="d-flex gap-2 justify-content-center w-100 my-5">
        <button className="btn btn-primary">&lt;</button>
        <button className="btn btn-primary">&gt;</button>
      </div>
    </>
  );
}

export default Landing;
