import FoodListError from './components/FoodListError'
import FoodList from './components/FoodList'
function App() {
  const items=["a","b","c"];
   //const items=[];

  
  return (
    <>
      <div className="container">
        <div>Healty Foods</div>
        <FoodListError items={items}/>
        <FoodList items={items}/>
      </div>
    </>
  );
}

export default App;
