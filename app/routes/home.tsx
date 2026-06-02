import { useState } from "react";

export function meta() {
  return [
    { title: "Smart Production Line Project" },
    {
      name: "description",
      content: "Smart Production Line with Web Dashboard by Malek Alzu'bi",
    },
  ];
}

export default function Home() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(5);
  const [system, setSystem] = useState("Stopped");
  const [sensor, setSensor] = useState("No Object");
  const [gate, setGate] = useState("Closed");
  const [buzzer, setBuzzer] = useState("OFF");
  const [showExplanation, setShowExplanation] = useState(false);

  function demoMode() {
    setCount(5);
    setTarget(5);
    setSystem("Target Reached");
    setSensor("Object Detected");
    setGate("Open");
    setBuzzer("ON");
  }

  function resetDemo() {
    setCount(0);
    setTarget(5);
    setSystem("Stopped");
    setSensor("No Object");
    setGate("Closed");
    setBuzzer("OFF");
  }

  function simulateObject() {
    const newCount = count + 1;
    setCount(newCount);
    setSensor("Object Detected");

    if (newCount >= target) {
      setSystem("Target Reached");
      setGate("Open");
      setBuzzer("ON");
    } else {
      setSystem("Running");
      setGate("Closed");
      setBuzzer("OFF");
    }
  }

  return (
    <main className="page">
      <header className="hero">
        <h1>Smart Production Line with Web Dashboard</h1>
        <p>
          A one-page React Router website presenting my Arduino-based smart production line
          project with pictures, components, system explanation, useful URLs, social
          information, emojis, and an interactive live dashboard.
        </p>

        <div className="hero-buttons">
          <a href="#title">Start</a>
          <a href="#arduino-project">Arduino Project</a>
          <a href="#interactive">Interactive Element</a>
        </div>
      </header>

      <nav className="navbar">
        <a href="#title">Title</a>
        <a href="#names">Names</a>
        <a href="#pictures">Pictures</a>
        <a href="#about">About</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#lists">Lists</a>
        <a href="#references">URLs</a>
        <a href="#socials">Socials</a>
        <a href="#emojis">Emojis</a>
        <a href="#arduino-project">Arduino</a>
        <a href="#components">Components</a>
        <a href="#dashboard">Dashboard</a>
      </nav>

      <section id="title">
        <h2>Title</h2>
        <div className="card">
          <h3>Smart Production Line with Web Dashboard</h3>
          <p>
            This page shows a smart Arduino production line system that detects products,
            counts them, controls a servo gate, activates a buzzer alert, and displays
            live data on a web dashboard.
          </p>
        </div>
      </section>

      <section id="names">
        <h2>Names</h2>
        <div className="card">
          <p><strong>Student Name:</strong> Malek Alzu&apos;bi</p>
          <p><strong>Team Name:</strong> Mr. Engineering Team</p>
          <p><strong>Project Name:</strong> Smart Production Line with Web Dashboard</p>
          <p><strong>Course:</strong> Embedded Systems</p>
        </div>
      </section>

      <section id="pictures">
        <h2>Pictures</h2>

        <div className="grid">
          <div className="component-card">
            <img src="/images/arduino.jpg" alt="Arduino Uno" />
            <h3>Arduino Uno</h3>
            <p>The main controller used in the project.</p>
          </div>

          <div className="component-card">
            <img src="/images/wiring-diagram.jpg" alt="Wiring Diagram" />
            <h3>Wiring Diagram</h3>
            <p>The final wiring diagram of the smart production line.</p>
          </div>

          <div className="component-card">
            <img src="/images/web-dashboard.jpg" alt="Web Dashboard" />
            <h3>Web Dashboard</h3>
            <p>The live web dashboard used to monitor the system.</p>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <div className="card">
          <p>
            My name is <strong>Malek Alzu&apos;bi</strong>. I am a Mechatronics Engineering
            student at the <strong>German Jordanian University (GJU)</strong>. My major combines
            several important engineering fields such as automation, robotics, mechanical systems,
            electronics, sensors, actuators, control systems, and programming.
          </p>

          <p>
            I also gained hands-on automotive experience through my previous work with
            <strong> Porsche</strong> and <strong>Audi</strong>, where I worked in vehicle
            diagnostics, fault detection, and vehicle programming after replacing parts.
          </p>
        </div>
      </section>

      <section id="hobbies">
        <h2>Hobbies</h2>
        <div className="card">
          <ul>
            <li>🍳 Cooking and trying new recipes</li>
            <li>🏊 Swimming</li>
            <li>🏃 Running and staying active</li>
            <li>🛠 Building creative projects</li>
            <li>📈 Trading and learning about financial markets</li>
          </ul>
        </div>
      </section>

      <section id="lists">
        <h2>Lists</h2>

        <div className="grid">
          <div className="card">
            <h3>Project Inputs</h3>
            <ul>
              <li>IR Obstacle Sensor</li>
              <li>Push Button</li>
            </ul>
          </div>

          <div className="card">
            <h3>Project Outputs / Actuators</h3>
            <ul>
              <li>Servo Motor</li>
              <li>Buzzer</li>
            </ul>
          </div>

          <div className="card">
            <h3>Dashboard Values</h3>
            <ul>
              <li>COUNT</li>
              <li>TARGET</li>
              <li>SYSTEM</li>
              <li>SENSOR</li>
              <li>GATE</li>
              <li>BUZZER</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="references">
        <h2>URLs / References</h2>
        <div className="card references">
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API" target="_blank" rel="noreferrer">
            MDN Web Serial API Documentation
          </a>

          <a href="https://docs.arduino.cc/language-reference/en/functions/communication/serial/println/" target="_blank" rel="noreferrer">
            Arduino Serial.println Documentation
          </a>

          <a href="https://docs.arduino.cc/libraries/servo/" target="_blank" rel="noreferrer">
            Arduino Servo Library Documentation
          </a>

          <a href="https://docs.arduino.cc/language-reference/en/functions/digital-io/digitalread/" target="_blank" rel="noreferrer">
            Arduino digitalRead Documentation
          </a>

          <a href="https://docs.arduino.cc/language-reference/en/functions/digital-io/pinmode/" target="_blank" rel="noreferrer">
            Arduino pinMode Documentation
          </a>
        </div>
      </section>

      <section id="socials">
        <h2>Socials</h2>
        <div className="card">
          <p><strong>Name:</strong> Malek Alzu&apos;bi</p>
          <p><strong>Email:</strong> malekalzubi02@gmail.com</p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              className="github-link"
              href="https://github.com/malekalzubi02-netizen/Arduino-Smart-Production-Line"
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub Repository
            </a>
          </p>
          <p><strong>Project:</strong> Smart Production Line with Web Dashboard</p>
        </div>
      </section>

      <section id="emojis">
        <h2>Emojis</h2>
        <div className="card">
          <p className="emoji-line">⚙️ 🤖 📟 🔊 🚪 📊 🍳 🏊 🏃 📈</p>
          <p>
            These emojis represent automation, Arduino control, sensor detection, buzzer alert,
            gate movement, dashboard monitoring, and personal hobbies.
          </p>
        </div>
      </section>

      <section id="arduino-project">
        <h2>From My Arduino Project</h2>

        <div className="card">
          <h3>Project Overview</h3>
          <p>
            This project simulates a small industrial production line. An IR obstacle sensor
            detects each product passing through the line. The Arduino counts the products and
            sends live information to a web dashboard through the USB serial connection. When
            the target count is reached, the servo motor opens the gate and the buzzer gives an alert.
          </p>
        </div>

        <div className="card">
          <h3>Problem Statement</h3>
          <p>
            In many production lines, manual counting can be slow, inaccurate, and difficult to
            monitor in real time. This project provides a simple automated solution for counting
            objects, monitoring system status, and giving feedback when the required target number
            is reached.
          </p>
        </div>

        <div className="card">
          <h3>Purpose of the Device</h3>
          <p>
            The purpose of this device is to create a small automated production line prototype.
            It detects products, counts them automatically, controls a gate using a servo motor,
            gives an alert using a buzzer, and displays live data on a web dashboard.
          </p>
        </div>
      </section>

      <section id="components">
        <h2>Components Used</h2>

        <div className="grid">
          <div className="component-card">
            <img src="/images/arduino.jpg" alt="Arduino Uno" />
            <h3>Arduino Uno</h3>
            <p>The main controller that reads the inputs, controls the actuators, and sends data to the web page.</p>
          </div>

          <div className="component-card">
            <img src="/images/ir-sensor.jpg" alt="IR Obstacle Sensor" />
            <h3>IR Obstacle Sensor</h3>
            <p>Detects objects passing in front of the sensor and works as the product detection input.</p>
          </div>

          <div className="component-card">
            <img src="/images/push-button.jpg" alt="Push Button" />
            <h3>Push Button</h3>
            <p>Used as a Start and Reset button for the production cycle.</p>
          </div>

          <div className="component-card">
            <img src="/images/servo.jpg" alt="Servo Motor" />
            <h3>Servo Motor</h3>
            <p>Acts as an automatic gate that opens when the target count is reached.</p>
          </div>

          <div className="component-card">
            <img src="/images/buzzer.jpg" alt="Buzzer" />
            <h3>Buzzer</h3>
            <p>Provides an audio alert when an object is counted or when the target is reached.</p>
          </div>

          <div className="component-card">
            <img src="/images/web-dashboard.jpg" alt="Web Dashboard" />
            <h3>Web Dashboard</h3>
            <p>Displays the live product count, system status, sensor status, gate status, and buzzer status.</p>
          </div>
        </div>
      </section>

      <section id="functionality">
        <h2>Pictures and Functionality</h2>
        <div className="card">
          <p>
            The following image shows the final wiring between the Arduino Uno and the main
            components used in the project: push button, buzzer, servo motor, IR obstacle sensor,
            and the laptop web dashboard through USB serial communication.
          </p>
          <img className="wiring-image" src="/images/wiring-diagram.jpg" alt="Smart Production Line Wiring Diagram" />
        </div>
      </section>

      <section id="working">
        <h2>How the System Works</h2>

        <div className="flow">
          <div className="step">Press Start</div>
          <div className="arrow">→</div>
          <div className="step">Detect Object</div>
          <div className="arrow">→</div>
          <div className="step">Increase Counter</div>
          <div className="arrow">→</div>
          <div className="step">Update Web Page</div>
          <div className="arrow">→</div>
          <div className="step">Target Reached</div>
          <div className="arrow">→</div>
          <div className="step">Servo + Buzzer</div>
        </div>
      </section>

      <section id="dashboard">
        <h2>Live Dashboard</h2>
        <p>
          You can use Demo Mode to test the dashboard without connecting the Arduino.
        </p>

        <button onClick={simulateObject}>Simulate Object</button>
        <button onClick={demoMode}>Demo Mode</button>
        <button className="reset-btn" onClick={resetDemo}>Reset Demo</button>

        <div className="dashboard">
          <div className="dash-card big-counter">
            <div className="dash-label">Product Count</div>
            <div className="dash-value">{count}</div>
          </div>

          <div className="dash-card">
            <div className="dash-label">Target</div>
            <div className="dash-value">{target}</div>
          </div>

          <div className="dash-card">
            <div className="dash-label">System Status</div>
            <div className={`dash-value ${system === "Target Reached" ? "warning" : system === "Running" ? "running" : "stopped"}`}>
              {system}
            </div>
          </div>

          <div className="dash-card">
            <div className="dash-label">Sensor Status</div>
            <div className="dash-value">{sensor}</div>
          </div>

          <div className="dash-card">
            <div className="dash-label">Gate Status</div>
            <div className="dash-value">{gate}</div>
          </div>

          <div className="dash-card">
            <div className="dash-label">Buzzer Status</div>
            <div className="dash-value">{buzzer}</div>
          </div>
        </div>
      </section>

      <section id="interactive">
        <h2>Interactive Element</h2>
        <div className="card">
          <p>
            This website includes interactive buttons. Demo Mode simulates the final system state,
            Reset Demo returns the dashboard to the initial state, and Show / Hide displays extra explanation.
          </p>

          <button className="show-btn" onClick={() => setShowExplanation(!showExplanation)}>
            Show / Hide Extra Explanation
          </button>

          {showExplanation && (
            <p>
              In Demo Mode, the count becomes equal to the target. The system status changes to
              Target Reached, the sensor status becomes Object Detected, the gate opens, and the buzzer turns ON.
            </p>
          )}
        </div>
      </section>

      <section id="team">
        <h2>Team Members</h2>
        <div className="card">
          <p><strong>Team Name:</strong> Mr. Engineering Team</p>
          <p><strong>Team Member:</strong> Malek Alzu&apos;bi</p>
          <p>This project was developed as a final project for the Embedded Systems course.</p>
        </div>
      </section>

      <footer>
        Smart Production Line with Web Dashboard | Final Project | Malek Alzu&apos;bi
      </footer>
    </main>
  );
}