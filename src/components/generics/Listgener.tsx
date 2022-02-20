// import React from "react";
// export type ListgenerProps<T> = {
//   items: <T> | number[];
//   onclick: (value: <T>) => void;
// };
// export const Listgener = <T extends {}>({ items, onclick }: ListgenerProps<T>) => {
//   return (
//     <div>
//       {items.map((item, index) => {
//         return (
//           <div key={index} onClick={() => onclick(item)}>
//             {item}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
import React from 'react'

export const Listgener = () => {
  return (
    <div>Listgener</div>
  )
}

