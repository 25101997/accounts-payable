import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css'
import SideBarMenu from '../components/SideBarMenu'

let onButton = false;

const Header = (props) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        onButton = true;
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        
        // Realizar una llamada a la API o lógica personalizada para obtener todas las sugerencias
        // (Reemplaza esto con tu lógica real)
        const allSuggestions = [
          { text: 'menu principal', url: 'http://localhost:3000/' },
          { text: 'menu reportes', url: 'http://localhost:3000/report-menu' },
          { text: 'proveedores', url: 'http://localhost:3000/suppliers' },
          { text: 'ingresar nuevo proveedor', url: 'http://localhost:3000/supplier-form' },
          { text: 'proveedores destacados', url: 'http://localhost:3000/suppliers-top' },
          { text: 'historial de facturas', url: 'http://localhost:3000/invoices' },
          { text: 'registrar nueva factura', url: 'http://localhost:3000/invoice-form' },
          { text: 'ver balance de saldos', url: 'http://localhost:3000/late-payment-table' },
        ];
        
        if (newSearchTerm.trim() === '') {
          // Si el término de búsqueda está vacío, no muestres ninguna sugerencia
          setSuggestions([]);
        } else {
          // Filtrar sugerencias basadas en el término de búsqueda
          const filteredSuggestions = allSuggestions.filter((suggestion) =>
            suggestion.text.toLowerCase().includes(newSearchTerm.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        }
      };
    
    return(
        <>

            <header className="header">
                <div className="header-item">
                    <IconButton
                        size="large"
                        color= '#547A10'
                        aria-label="menu"
                        onClick={toggleMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <h2 className="header-title">Accounts Payable</h2>
                </div>

                <div className="header-item">
                    <div className='searchDiv'>
                        <SearchIcon />
                        <div>
                        <input
                            type="text"
                            placeholder="BUSCAR"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className='search-input'
                        />
                        <ul className='option-container'>
                            { suggestions.map((suggestion, index) => (
                                <li key={index} className='option-item'><a href={suggestion.url} className='option-text'>{suggestion.text}</a></li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="header-item">
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="primary"
                    >
                        <img src="https://es.seaicons.com/wp-content/uploads/2015/08/green-user-icon.png" alt="User Icon" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                    </IconButton>

                    <h3 className="header-title">Francisco Lopez</h3>
                
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
                    </Menu>
                </div>
            </header>

            <SideBarMenu isVisible={isMenuVisible} />
        </>
    );
};

export default Header;