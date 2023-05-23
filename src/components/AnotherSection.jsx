import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MAP from 'assets/img/map.png';
import BackBg from 'assets/img/aturcara.png'

class AnotherSection extends PureComponent {
    render() {
        return (
            <>
                <div style={{background:`url(${BackBg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat', width:'100%', paddingTop:'calc(152% - 55px)'}}>
                </div>
                
                <hr/>
            </>
        );
    }
}

AnotherSection.propTypes = {

};

export default AnotherSection;