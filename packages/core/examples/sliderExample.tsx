/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0
 */

import * as React from "react";

import { Slider } from "../src";
import BaseExample from "./common/baseExample";

export interface ISliderExampleState {
    value1?: number;
    value2?: number;
    value3?: number;
}

export class SliderExample extends BaseExample<ISliderExampleState> {
    public state: ISliderExampleState = {
        value1: 0,
        value2: 25,
        value3: 30,
    };

    protected renderExample() {
        return (
            <div style={{ width: "100%" }}>
                <Slider
                    min={0}
                    max={100}
                    stepSize={1}
                    labelStepSize={10}
                    onChange={this.getChangeHandler("value2")}
                    value={this.state.value2}
                />
                <Slider
                    min={0}
                    max={0.7}
                    stepSize={0.01}
                    labelStepSize={0.14}
                    onChange={this.getChangeHandler("value1")}
                    renderLabel={this.renderLabel1}
                    value={this.state.value1}
                />
                <Slider
                    min={-12}
                    max={48}
                    stepSize={6}
                    labelStepSize={10}
                    onChange={this.getChangeHandler("value3")}
                    renderLabel={this.renderLabel3}
                    showTrackFill={false}
                    value={this.state.value3}
                />
            </div>
        );
    }

    private getChangeHandler(key: string) {
        return (value: number) => this.setState({ [key]: value });
    }

    private renderLabel1(val: number) {
        return `${Math.round(val * 100)}%`;
    }

    private renderLabel3(val: number) {
        return val === 0 ? `£${val}` : `£${val},000`;
    }
}
