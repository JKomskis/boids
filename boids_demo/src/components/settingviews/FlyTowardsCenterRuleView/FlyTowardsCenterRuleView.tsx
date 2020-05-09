import React from "react";
import "./FlyTowardsCenterRuleView.css";
import { FlyTowardsCenterRule } from "boids_lib";

type FlyTowardsCenterRuleViewProps = {
  rule: FlyTowardsCenterRule;
};

class FlyTowardsCenterRuleView extends React.Component<
  FlyTowardsCenterRuleViewProps
> {
  handleChange = (event: any) => {};

  render() {
    return (
      <div>
        <label>Turning Factor:</label>
        <input
          type="range"
          min="0"
          max="1"
          value={this.props.rule.getTurningFactor()}
          step="0.1"
        />
      </div>
    );
  }
}

export default FlyTowardsCenterRuleView;
