function App() {
  const items=["A","B","C","D","E","F"];
  const strlower=(item)=>{
   return item.toLowerCase()
  }
  return (
    <>
      <div className="container">
        <div>Healty Foods</div>
        <ul className="list-group">
        {
          items.map((item,index)=>
              <li key={index} className="list-group-item">{strlower(item)}</li>
          )
        }
        </ul>
      </div>
    </>
  );
}

export default App;
