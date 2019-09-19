import "./Slider.css";
import React from 'react'


class Slider extends React.Component {
    state = {
        value: 0
    }
    onChange = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }
    handleChange = (evt) => {
        this.setState(
            {
                value: evt.target.value
            }
        )
    }
    render() {
        const { value } = this.state
        console.log(value);
        return (
            <React.Fragment>
                <input type="text" value={value}
                    onChange={(evt) => this.handleChange(evt)}
                    style={{ margin: "0px 0px 50px 0px" }} />
                <input id="slide"
                    type="range"
                    value={value}
                    onChange={(evt) => this.onChange(evt)} />
            </React.Fragment>
        )
    }
}
export default Slider;