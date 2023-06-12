import React, { useState } from "react";
import "./styles.css";

const Sidebar = () => {
  const [submenus, setSubmenus] = useState([]);

  const handleToggleSubmenu = (index) => {
    setSubmenus((prevSubmenus) => {
      const updatedSubmenus = [...prevSubmenus];
      updatedSubmenus[index] = !updatedSubmenus[index];
      return updatedSubmenus;
    });
  };
  console.log("", submenus)

  return (
    <aside className="sidebar">
      <h2>Menú</h2>
      <ul className="menu">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a onClick={() => handleToggleSubmenu(0)}>Productos</a>
          <ul className={`submenu ${submenus[0] ? "open" : ""}`}>
            <li>
              <a href="#">Producto 1</a>
            </li>
            <li>
              <a href="#">Producto 2</a>
            </li>
            <li>
              <a href="#">Producto 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Servicios</a>
          <ul className={`submenu ${submenus[1] ? "open" : ""}`}>
            <li>
              <a href="#">Servicio 1</a>
            </li>
            <li>
              <a href="#">Servicio 2</a>
            </li>
            <li>
              <a href="#">Servicio 3</a>
            </li>
          </ul>
          <button onClick={() => handleToggleSubmenu(1)}>Toggle</button>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
