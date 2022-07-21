import "./Favourite.css";


// to get the data from local storage--------------start
 var favCountry = JSON.parse(localStorage.getItem("favCountry") || "[]");

 var favCount=favCountry[0]
 console.log(favCount);
// to get the data from local storage-----------end


function Favourite() {
 
  return (
    <>
      <div className="fav_container">
        <div className="fav_heading">
          <h3>Your Favourite Country</h3>
        </div>
        {favCount?.map((sumdata) => (
          <div className="fav_sub_container">
            <div className="fav_item_img">
              <img className="fav_img" src={sumdata.flags.png} alt="" />
            </div>
            <div className="fav_item_name">
              <h3>{sumdata.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  
}

export default Favourite;
