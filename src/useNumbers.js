import { useState } from "react";

export const useNumbers = (a) => {
  const [array, setArray] = useState([]);

  const numbers = (e) => {
    a.sort();
    var sinDuplicados = [];
    for (let i = 0; i < a.length; i++) {
      if (sinDuplicados.indexOf(a[i]) === -1) {
        sinDuplicados.push(a[i]);
      }
    }

    const result = sinDuplicados.reduce((r, n) => {
      const SubArreglo = r[r.length - 1];

      if (!SubArreglo || SubArreglo[SubArreglo.length - 1] !== n - 1) {
        r.push([]);
      }

      r[r.length - 1].push(n);
      return r;
    }, []);
    //result.map((n) => n.toString());
    return result.map((n) => n.toString());
  };

  return {
    numbers,
  };
};
