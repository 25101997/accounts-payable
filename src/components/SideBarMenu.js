import React from 'react';
import '../styles/SideBarMenu.css';

const SideBarMenu = ({ isVisible }) => {
  return (
    <div className={`sidebar-menu ${isVisible ? 'visible' : ''}`}>
      <div className="sidebar">
        <ul className='sidebar-container'>
          <li className='sidebar-item'><a href="/" className='sidebar-text'>Inicio</a></li>

          <li className='sidebar-item'><a href="/invoices" className='sidebar-text'>Historial De Facturas</a></li>
          <li className='sidebar-item'><a href="/invoice-form" className='sidebar-text'>Registrar Nueva Factura</a></li>
          
          <li className='sidebar-item'><a href="/suppliers" className='sidebar-text'>Proveedores</a></li>
          <li className='sidebar-item'><a href="/supplier-form" className='sidebar-text'>Registrar Nuevo Proveedor</a></li>
          <li className='sidebar-item'><a href="/suppliers-top" className='sidebar-text'>Proveedores Destacados</a></li>

          <li className='sidebar-item'><a href="/report-menu" className='sidebar-text'>Reporteria</a></li>
          <li className='sidebar-item'><a href="/late-payment-table" className='sidebar-text'>Ver Balance De Saldos</a></li>

        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
