import React, { Component } from 'react';

export function Header() {
    return (
        <div className='header'>
            <h1 className='header_title'>Welcome to HOA Manager!</h1>
            <p className='header_subtitle'>Please login to continue</p>
        </div>
    )
}

export function HeaderBar() {
    return (
        <div className='bar'></div>
    )
}