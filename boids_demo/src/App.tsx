import React from "react";
import "./App.css";
import {
  Flock,
  Boid,
  Vector,
  FlockSettings,
  StayWithinBoundsRule,
  FlyTowardsCenterRule,
} from "boids_lib";
import Canvas from "./components/canvas/Canvas";
import Sidebar from "./components/sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

type AppState = {
  flock: Flock;
  flockSettings: FlockSettings;
  sidebarOpen: boolean;
};

class App extends React.Component<{}, AppState> {
  private simRate = 1000 / 60; // target 60 fps
  private timeAccumulator = 0;
  private previousFrame = 0;

  constructor(props: {}) {
    super(props);
    const flockSettings = new FlockSettings();
    const flock = new Flock(flockSettings);
    let boids = Array(50)
      .fill(0)
      .map(() => {
        return new Boid(
          new Vector(
            Math.random() * window.innerWidth - window.innerWidth / 2,
            Math.random() * window.innerHeight - window.innerHeight / 2,
            0
          ),
          new Vector(Math.random() * 500 - 250, Math.random() * 500 - 250, 0)
        );
      });
    // let boids = [new Boid(new Vector(0, 0, 0), new Vector(250, 0, 0))];
    console.log(boids);
    flock.addBoids(boids);
    flock.addRule(new FlyTowardsCenterRule(flockSettings));
    flock.addRule(
      new StayWithinBoundsRule(
        flockSettings,
        -window.innerWidth / 2,
        window.innerWidth / 2,
        -window.innerHeight / 2,
        window.innerHeight / 2,
        0,
        0
      )
    );
    this.state = {
      flock: flock,
      flockSettings: flockSettings,
      sidebarOpen: false,
    };
  }

  componentDidMount() {
    requestAnimationFrame((timeMs) => {
      this.tickSimulation(timeMs);
    });
  }

  private tickSimulation(timeMs: number) {
    if (this.previousFrame === 0) this.previousFrame = timeMs;
    const diffMs = timeMs - this.previousFrame;
    this.previousFrame = timeMs;
    // console.log(diffMs);
    // console.log(timeMs);

    this.timeAccumulator += diffMs;
    let newFlock = this.state.flock;
    while (this.timeAccumulator > this.simRate) {
      newFlock.tick(this.simRate);

      this.timeAccumulator -= this.simRate;
    }
    this.setState({
      flock: newFlock,
    });

    requestAnimationFrame((timeMs) => {
      this.tickSimulation(timeMs);
    });
  }

  handleToggleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };

  initSettingsControls() {
    return (
      <div>
        {this.state.flock.getRules().map((rule) => {
          return this.initSettingControls(rule);
        })}
      </div>
    );
  }

  initSettingControls(rule: Rule) {
    switch (rule.constructor) {
      case FlyTowardsCenterRule:
        return;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Boids</h1>
        </header>
        <div className="App-content">
          <Canvas
            flock={this.state.flock}
            flockSettings={this.state.flockSettings}
          />
        </div>
        <div className="App-sidebar">
          <FontAwesomeIcon
            className="SidebarToggle"
            icon={faCog}
            onClick={this.handleToggleSidebar}
            size={"3x"}
          />
          <Sidebar
            isOpen={this.state.sidebarOpen}
            flock={this.state.flock}
            flockSettings={this.state.flockSettings}
          >
            <h2 className="SidebarTitle">Settings</h2>
            {this.initSettingsControls()}
          </Sidebar>
        </div>
        <footer className="App-footer">
          <p>footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
