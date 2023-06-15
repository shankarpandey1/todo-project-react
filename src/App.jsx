import { useEffect, useState } from 'react';
import './app.scss';


function App() {

  const [input, setInput] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo-items')) || []);


  useEffect(() => {
    localStorage.setItem('todo-items', JSON.stringify(items));
  }, [items]);

  return (
    <div id="app">
      <h1>My Todo List 🗒️</h1>

      <div className="container">
        <form>
          <h2>Add Item</h2>
          <input
            type="text"
            id="title"
            placeholder="Title"
            class="form-control"
            autocomplete="off"
            onChange={(event) => {
              setInput(event.target.value);
            }}
            value={input}
          />
          <button
            // type="button"
            onClick={(event) => {
              if (!input) {
                alert('value can not be empty');
                return;
              }
              // event.preventDefault();
              const newItems = [...items];
              newItems.push(input);
              setItems(newItems);
              setInput('');
            }}
          >
            Add

          </button>
          <button className='reset'
            style={{
              backgroundColor: 'skyblue'
            }}
          >
            Reset
          </button>
        </form>

        <div className="items">
          <h2>My Items</h2>
          <ol>
            {
              items.map((item, index) => {
                return <li key={`item-${index}`}>
                  <h3>
                    {item}
                  </h3>
                  <button
                    className="delete"
                    onClick={() => {
                      console.log(index);
                      const newItems = items.filter((item, indexItem) => {
                        return (index !== indexItem)
                      })
                      // const newItems = [
                      //   ...items.slice(0, index),
                      //   ...items.slice(index + 1, items.length)
                      // ]
                      setItems(newItems);
                    }}
                  ></button>
                </li>
              })
            }
          </ol>

        </div>
      </div>
    </div>
  );
}

export default App;
