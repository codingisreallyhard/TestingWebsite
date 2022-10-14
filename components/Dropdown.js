import { React, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
function DropDownFunction() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownSalon, setShowDropdownSalon] = useState(false);
  const [showDropdownBio, setShowDropdownBio] = useState(false);
  return (
    <>
      <Dropdown
        onMouseLeave={() => setShowDropdown(false)}
        onMouseOver={() => setShowDropdown(true)}
      >
        <Dropdown.Toggle
          className="main-style"
          id="dropdown-basic"
          style={{ backgroundColor: "#000" }}
        >
          Servicii
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" show={showDropdown}>
          <Dropdown.Item href="#/action-1">Preturi</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Tatuaje</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Piercing</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown
        onMouseLeave={() => setShowDropdownSalon(false)}
        onMouseOver={() => setShowDropdownSalon(true)}
      >
        <Dropdown.Toggle
          className="main-style"
          id="dropdown-basic"
          menuVariant="dark"
          style={{ backgroundColor: "#000" }}
        >
          Salon
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" show={showDropdownSalon}>
          <Dropdown.Item href="#/action-1">Locatie</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown
        onMouseLeave={() => setShowDropdownBio(false)}
        onMouseOver={() => setShowDropdownBio(true)}
      >
        <Dropdown.Toggle
          className="main-style"
          id="dropdown-basic"
          style={{ backgroundColor: "#000" }}
        >
          Despre
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" show={showDropdownBio}>
          <Dropdown.Item href="#/action-1">Biografie</Dropdown.Item>
          <Dropdown.Item href="#/action-2">FAQ</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropDownFunction;
