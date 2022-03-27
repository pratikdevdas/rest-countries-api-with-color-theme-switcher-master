import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Region from "./Region";

function App() {
  const [countries, setcountries] = useState([]);
  const [search, setsearch] = useState("");
  const [regionname, setRegionName] = useState('')
  const [regionFilter, setRegionFilter] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setcountries(response.data));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };
  
  const filter = countries.filter(c =>
  c.name.common.toLowerCase().includes(search.toLowerCase())
);

const regionSearch = (e)=>{
  e.preventDefault()
  setRegionFilter(regionname)
}

const region = filter.filter(c => c.region.toLowerCase().includes(regionFilter.toLowerCase()) )
console.log(region)
  const randomstyles = { maxWidth: '100%', maxHeight:'50%' }

  return (
    <div>
      search region
      <form onSubmit={regionSearch}>
      <input value={regionname} onChange={(event)=>setRegionName(event.target.value)}/>
      <button onClick={regionSearch}>search by region</button>
      </form>
      <div>
      search countries
      <input type="text" onChange={handleChange} />
      </div>
      <Region/>
      <div className="container">
        {region.map((c) => (
          <div className="box" key={c.id}>
            <div>
              <img src={c.flags.png} alt="" style={randomstyles} />
              </div>
            <div>{c.name.common}</div>
            <div>{c.population}</div>
            <div>{c.region}</div>
            <div>{c.capital}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
