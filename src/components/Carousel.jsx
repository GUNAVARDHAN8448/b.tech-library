import React,{useState} from 'react'

function Carousel() {
  const [search,setSearch] = useState('');
  return (
  
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
  )
}

export default Carousel;