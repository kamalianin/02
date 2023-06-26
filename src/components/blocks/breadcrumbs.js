import React from 'react';
import '../../assets/scss/breadcrumbs.scss'
import logo from "../../assets/img/logo_header.png";
import {brandName} from "../../App";
import { Button } from 'primereact/button';


export default function App() {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>

        </div>
    );
}
