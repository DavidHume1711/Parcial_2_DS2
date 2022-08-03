import App from "./App";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import { Encabezado } from "./Encabezado";
import { useNumbers } from "./useNumbers";

test("Busando texto en el componente", () => {
  const wrapper = shallow(<Encabezado className="encabezado" />);
  const textoaProbar = wrapper.find("h1").text();
  const textoPrueba = "Organizadores";
  expect(textoPrueba).toBe(textoaProbar);
});

describe("useNumbers", () => {
  let arreglo = [9, 8, 4, 5, 6, 7, 1, 9];
  it("Revisar si contiene string", () => {
    const myFuncComp = render(() => useNumbers(arreglo));
    const expected = true;
    const received = myFuncComp.result?.current?.numbers();
    expect(typeof received[0] == "string").toEqual(expected);
  });
});
