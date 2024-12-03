import React, { useState } from "react";
import CardMenu from "./../../components/Card/CardMenu";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import Modal1 from "../../components/Modal/Modal1";
import Modal2 from "../../components/Modal/Modal2";
import Modal3 from "../../components/Modal/Modal3";

const Menu = () => {
  const [isModal1Open, setIsModal1Open] = useState(false); // Estado para Modal1
  const [isModal2Open, setIsModal2Open] = useState(false); // Estado para Modal2
  const [isModal3Open, setIsModal3Open] = useState(false); // Estado para Modal3

  const handleOpenModal1 = () => setIsModal1Open(true); // Abre Modal1
  const handleOpenModal2 = () => setIsModal2Open(true); // Abre Modal2
  const handleOpenModal3 = () => setIsModal3Open(true); // Abre Modal3

  const handleCloseModal1 = () => setIsModal1Open(false); // Cierra Modal1
  const handleCloseModal2 = () => setIsModal2Open(false); // Cierra Modal2
  const handleCloseModal3 = () => setIsModal3Open(false); // Cierra Modal3

  return (
    <LayoutPrincipal>
      <div className="flex min-h-screen gap-6 justify-center items-center">
        {/* Primera carta con Modal1 */}
        <CardMenu
          image=""
          title="Completo"
          onAdd={handleOpenModal1} // Abre Modal1
        />

        {/* Segunda carta con Modal2 */}
        <CardMenu
          image="IMG/AlmuerzoCompleto.jpg"
          title="Bandeja"
          onAdd={handleOpenModal2} // Abre Modal2
        />

        {/* Tercera carta con Modal3 */}
        <CardMenu
          image="https://via.placeholder.com/300x200?text=Comida3"
          title="Sancocho"
          onAdd={handleOpenModal3} // Abre Modal3
        />
      </div>

      {/* Modales */}
      <Modal1 isOpen={isModal1Open} onClose={handleCloseModal1} />
      <Modal2 isOpen={isModal2Open} onClose={handleCloseModal2} />
      <Modal3 isOpen={isModal3Open} onClose={handleCloseModal3} />
    </LayoutPrincipal>
  );
};

export default Menu;