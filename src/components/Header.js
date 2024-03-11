import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css'

let onButton = false;

const Header = (props) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        onButton = true;
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
            <AppBar sx={{ backgroundColor: '#CBEE8E' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color= '#547A10'
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#547A10', fontWeight: 'bold', fontFamily: 'Century Gothic, sans-serif' }}>
                        Accounts Payable
                    </Typography>
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

                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;