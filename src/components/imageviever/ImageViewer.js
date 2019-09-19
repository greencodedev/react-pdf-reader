import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';

class ImageViewer extends Component {
    state = {
        MAP: {
            name: "my-map",
            areas: [
                {
                    name: "3",
                    shape: "poly",
                    coords: [],
                    preFillColor: "yellow"
                }
            ]
        },
        x1: "",
        y1: "",
        x2: "",
        y2: "",
        width: "",
        counter: 0,
    }
    onChange = (evt) => {
        this.setState(
            {
                [evt.target.name]: evt.target.value,
            }
        )
    }

    Submit = (evt) => {
        const { x1, x2, y1, y2, MAP, width } = this.state;
        this.setState({
            MAP: {
                ...this.state.MAP,
                areas: [
                    
                    {
                        ...this.state.MAP.areas[0],
                        coords: [x1, y1, x1, parseInt(width) + parseInt(y1), x2, parseInt(width) + parseInt(y1), x2, y1]
                    }
                ]

            },
            counter: this.state.counter + 1,
        })
    }
    render() {
        const { MAP, counter } = this.state
        console.log(MAP)
        return (
            <React.Fragment>
                X1:<input type="text" name="x1" onChange={(evt) => this.onChange(evt)} />
                y1:<input type="text" name="y1" onChange={(evt) => this.onChange(evt)} /> <br /><br />
                X2:<input type="text" name="x2" onChange={(evt) => this.onChange(evt)} />
                y2:<input type="text" name="y2" onChange={(evt) => this.onChange(evt)} /><br /><br />
                Enter height For heighlighting area:<input type="text" name="width" onChange={(evt) => this.onChange(evt)} /><br />
                <button onClick={(evt) => this.Submit(evt)}>Hieghlight the area</button>

                {MAP.areas[0].coords.length > 0 && <ImageMapper src={this.props.file} map={MAP} />}
            </React.Fragment>
        )
    }
}
export default ImageViewer;