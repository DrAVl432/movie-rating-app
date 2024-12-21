   // src/App.tsx
   import React from 'react';
   import Stars from './components/Stars';
   import './App.css';

   function App() {
     return (
       <div className="App">
         <Stars count={5} /> {/* Число звезд */}
       </div>
     );
   }

   export default App;