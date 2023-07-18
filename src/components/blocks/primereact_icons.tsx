import React from 'react';
import { Menu } from 'primereact/menu';
import { PrimeIcons } from 'primereact/api';

const PrimereactIcons = () => {
    const items = [
        {
            label: 'File',
            items: [
                { label: 'New', icon: PrimeIcons.PLUS },
                { label: 'Open', icon: PrimeIcons.DOWNLOAD }
            ]
        }
    ];

    return (
        <div>
            <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
            <i className="pi pi-times" style={{ fontSize: '1.5rem' }}></i>
            <i className="pi pi-spin pi-search" style={{ fontSize: '2rem' }}></i>
            <i className="pi pi-spin pi-user" style={{ fontSize: '2.5rem' }}></i>
            <i className="pi pi-check" style={{ color: 'slateblue' }}></i>
            <i className="pi pi-times" style={{ color: 'green' }}></i>
            <i className="pi pi-search" style={{ color: 'var(--primary-color)' }}></i>
            <i className="pi pi-user" style={{ color: '#708090' }}></i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
                <g id="chevron-down">
                    <path d="M12,15.25a.74.74,0,0,1-.53-.22l-5-5A.75.75,0,0,1,7.53,9L12,13.44,16.47,9A.75.75,0,0,1,17.53,10l-5,5A.74.74,0,0,1,12,15.25Z"/>
                </g>
            </svg>
            <Menu model={items} />
        </div>
    );
};

export default PrimereactIcons;