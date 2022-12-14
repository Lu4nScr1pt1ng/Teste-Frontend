import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#3253FF]">
      <div className="container mx-auto flex h-[70px] items-center">
        <nav className="text-center w-[100%]">
          <ul className="flex justify-between font-bold">
            <li>
              <NavLink to={"/"}>TODOS OS CEP</NavLink>
            </li>
            <li>
              <NavLink to={"/cadastrar"}>CADASTRAR CEP</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
