import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
// import Carousel from '../components/Carousel';
function Home() {
  const [search,setSearch] = useState('');
  const [branchNames, setBranchNames] = useState([]);
  const [booksItem, setBooksItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/booksData", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      }
    });
    response = await response.json();
    setBooksItem(response[0]);
    setBranchNames(response[1]);
    // console.log(response[0],response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])



  return (
    <div>
      <div><Navbar /></div>
      <div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"fill"}}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{zIndex:"10"}}>
            <div className="d-flex justify-content-centre" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => {setSearch(e.target.value)} } />
                {/* <button className="btn btn-outline-info text-black bg-info" type="submit">Search</button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/450×350/?Books" className="d-block w-100" alt="Books" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/450×350/?Tech/students" className="d-block w-100" alt="Students" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/450×350/?Library" className="d-block w-100" alt="Library" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      </div>
      <div className='m-3'>
        {
          branchNames !== [] && branchNames.map((data) => {
            return (
              <div className='row mb-3'>
                <div key={data._id} className="fs-2 m-3" id={data.BranchName}>
                  {data.BranchName}
                </div>
                <hr />
                {booksItem !== [] ? booksItem.filter((item) => (item.BranchName === data.BranchName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )
                .map(filterItems => {
                    return (
                      <div key={filterItems._id} className="col-9 col-md-6 col-lg-3">
                         <Card bookItem = {filterItems}
                               price =  {filterItems.Price}
                         />
                      </div>
                )
                })
                : <div> NO SUCH DATA FOUND </div>}
              </div>
            )
          })
        }
      </div>
      <div><Footer /> </div>
    </div>
  )
}

export default Home;