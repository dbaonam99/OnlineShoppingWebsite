import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const trackHeight = 2;
const thumbHeight = 18;

const muiRailStyle = (theme) => ({
    rail: {
        backgroundColor: "#ddd",
        width: "100%",
        height: trackHeight,
        position: "absolute",
        pointerEvents: "none"
    },
    railHotspot: {
        // backgroundColor: "green", // for debugging
        width: "100%",
        height: thumbHeight * 2, // Invisible hotspot same size as thumb
        top: thumbHeight * -1,
        position: "absolute",
        cursor: "pointer"
    }
});

function MuiRailComponent({ classes, getRailProps }) {
    return (
        <Fragment>
        <div className={classes.railHotspot} {...getRailProps()} />
        <div className={classes.rail} />
        </Fragment>
    );
}

MuiRailComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    getRailProps: PropTypes.func.isRequired
};

export const MuiRail = withStyles(muiRailStyle)(MuiRailComponent);

// *******************************************************
// HANDLE COMPONENT
// *******************************************************

const muiHandleStyle = (theme) => ({
    root: {
        backgroundColor: "#112",
        marginLeft: thumbHeight * -0.5,
        marginTop: thumbHeight * -0.5,
        width: thumbHeight,
        height: thumbHeight,
        border: 0,
        borderRadius: "50%", // circle
        // boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
        whiteSpace: "nowrap", // for child display inline-block to work
        position: "absolute",
        zIndex: 2,
        cursor: "pointer"
    }
});

function MuiHandleComponent({
    domain: [min, max],
    handle: { id, value, percent },
    classes,
    getHandleProps
    }) {
    return (
        <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className={classes.root}
        style={{ left: `${percent}%` }}
        {...getHandleProps(id)}
        />
    );
}

MuiHandleComponent.propTypes = {
    domain: PropTypes.array.isRequired,
    handle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    classes: PropTypes.object.isRequired,
    getHandleProps: PropTypes.func.isRequired
};

export const MuiHandle = withStyles(muiHandleStyle)(MuiHandleComponent);

// *******************************************************
// TRACK COMPONENT
// *******************************************************

const muiTrackStyle = (theme) => ({
    track: {
        backgroundColor: "#112",
        height: trackHeight,
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none"
    },
    trackHotspot: {
        // backgroundColor: "grey", // for debugging
        height: thumbHeight, // Invisible hotspot same size as thumb
        top: thumbHeight * -0.5,
        position: "absolute",
        cursor: "pointer"
    }
});

function MuiTrackComponent({ classes, source, target, getTrackProps }) {
    const left = `${source.percent}%`;
    const width = `${target.percent - source.percent}%`;

    return (
        <Fragment>
        <div className={classes.track} style={{ left, width }} />
        <div
            className={classes.trackHotspot}
            style={{ left, width }}
            {...getTrackProps()}
        />
        </Fragment>
    );
}

MuiTrackComponent.propTypes = {
    source: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    target: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    classes: PropTypes.object.isRequired,
    getTrackProps: PropTypes.func.isRequired
};
 
export const MuiTrack = withStyles(muiTrackStyle)(MuiTrackComponent);
