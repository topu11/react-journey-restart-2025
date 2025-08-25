function App() {
  const items=["A","B","C","D","E","F"];
   //const items=[];
  const strlower=(item)=>item.toLowerCase()
  
  return (
    <>
      <div className="container">
        <div>Healty Foods</div>
        <h2>{items.length==0 && `I am hungry`}</h2>
        <ul className="list-group">
        {
          items.map((item,index)=><li className="list-group-item" key={index}>{strlower(item)}</li>)
        }
        </ul>
      </div>
    </>
  );
}

export default App;
