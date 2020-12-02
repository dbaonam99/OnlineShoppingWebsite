import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { MuiRail, MuiHandle, MuiTrack } from "./RangeSliderComponents";

export default class RangeSlider extends Component {
    constructor(props) {
        super(props);
        const initialValues = [0, 5000000];
        this.state = {
            domain: [0, 5000000],
            values: [...initialValues],
            update: [...initialValues]
        };
    }

    onUpdate = (update) => {
        this.setState({ 
            update 
        })
    };

    render() {
        const { domain, values, update } = this.state;
        this.props.setSortPriceValue(update)
        return (
            <Grid container>
                <Grid item xs={12} style={{ margin: "30px 0"}}>
                    <div style={{ marginBottom: "40px"}}>
                        <Slider
                            mode={2}
                            step={100000}
                            domain={domain}
                            rootStyle={{
                                position: "relative",
                                width: "100%"
                            }}
                            onUpdate={this.onUpdate}
                            onChange={this.onChange}
                            values={values}
                        >
                            <Rail>
                                {({ getRailProps }) => <MuiRail getRailProps={getRailProps} />}
                            </Rail>
                            <Handles>
                                {({ handles, getHandleProps }) => (
                                <div className="slider-handles">
                                    {handles.map((handle) => (
                                    <MuiHandle
                                        key={handle.id}
                                        handle={handle}
                                        domain={domain}
                                        getHandleProps={getHandleProps}
                                    />
                                    ))}
                                </div>
                                )}
                            </Handles>
                            <Tracks left={false} right={false}>
                                {({ tracks, getTrackProps }) => (
                                <div className="slider-tracks">
                                    {tracks.map(({ id, source, target }) => (
                                    <MuiTrack
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                    ))}
                                </div>
                                )}
                            </Tracks>
                        </Slider>
                    </div>
                    <Typography className="filter-price flex">
                        <span>{update[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                        <span>-</span>
                        <span>{update[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}
