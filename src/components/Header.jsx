import React, { Component } from 'react';
import HeaderBg from 'assets/img/header.png'

class Header extends Component {
    render() {
        return (
            <>
                <div style={{background:`url(${HeaderBg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat', width:'100%', paddingTop:'140%'}}>
                </div>

                <hr/>
            </>
        );
    }
}

export default Header;