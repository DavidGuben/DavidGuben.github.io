import React, {Component} from 'react'
import {View, Mask} from 'mdbreact'

import './../App.css'
import Logo from './../Images/logo.svg'

class Intro extends Component {
    render() {
        return (
            <View className="hm-blue-strong">
                <div className="intro z-depth-1">
                    <img src={Logo} alt="logo" width="150" height="150" className="App-logo animated rubberBand infinite" />
                    <Mask />
                </div>
            </View>
        );
    }
}

export default Intro
