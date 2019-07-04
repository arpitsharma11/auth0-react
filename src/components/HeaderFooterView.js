import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class HeaderFooterView extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                {this.props.children}
                <Footer activeState={0} />
            </React.Fragment>
        )
    }
}

export default HeaderFooterView;
