import React, { Component } from "react";
import Clock from "react-live-clock";
import { Switch } from "antd";
import moment from "moment";
import "./Clock.css";

export default class Time extends Component {
    render() {
        return (
            <div className="time">
                <Clock
                    format={"h:mm:ss a"}
                    ticking={true}
                    timezone={"BST"}
                />
            </div>
        );
    }
}
