import "./App.css";
import Testimonial from "./Components/Testimonial";
import data from "./data";

function App() {
  return (
    <div className="app">
      <div className="container">
        {data.map((el, index) => {
          return (
            <Testimonial
              classes={el.classes}
              name={el.name}
              title={el.title}
              quote={el.quote}
              key={index}
              image={el.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
