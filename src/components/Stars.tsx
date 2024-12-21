   // src/components/Stars.tsx
   import React from 'react';
   import Star from './Star';

   interface StarsProps {
     count: number;
   }

   const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
     // Проверка, что рейтинг находится в допустимых пределах
     if (typeof count !== 'number' || count < 1 || count > 5) {
       return null;
     }

     // Создание массива с заданным количеством элементов
     const starsArray = Array.from({ length: count }, (_, index) => <Star key={index} />);

     return (
       <ul className="card-body-stars u-clearfix">
         {starsArray}
       </ul>
     );
   };

   export default Stars;