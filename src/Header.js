import { render } from '@testing-library/react'
import React from 'react'
import Bline from './Bline'


class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = { color: "black" }
        console.log("constructor")
    }

    instructors = () => {
            return this.props.instructors.map(function(name){
                return <Bline name={name} />
            })
    }

    clickHandler = () => {
        if(this.state.color === "black") {
            this.setState({color: "pink"})
        } else {
            this.setState({color: "black"})
        }
    }

    render() {
        return (
            <div>
                <h1 onClick={this.clickHandler} style={{"border-style": "dashed", "border-color": `${this.state.color}`}}>Welcome to our App!</h1>
                {this.instructors()}
            </div>    
        )
    }
}
export default Header