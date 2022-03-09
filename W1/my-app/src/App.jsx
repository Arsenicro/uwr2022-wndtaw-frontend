import logo from "./logo.svg";
import "./App.css";

function App() {
    let count = 0;

    console.warn(count);

    return (
        <div>
            <button onClick={() => (count = count + 1)}>Click</button>
            <p>{count}</p>
        </div>
    );
}

export default App;
