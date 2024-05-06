/* 
1) Create two components:
   1. CounterController (we use it to control the counter)
   2. Counter (we use it to display the value of the counter)
*/

/*
2) Create a custom debounce hook (useDebounce)
- Which take two parameters: a value and delay
- It should return a value which is the value after delay time
- We need to show the debounced value in Counter component.
- The change in counter value should not render the Counter component.
- The change in debounced value should not render the CounterController component.
*/


export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>Hello World!</div>
  );
}
