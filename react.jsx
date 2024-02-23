import React from 'react';
import './App.css'; // Importing CSS file for styling

const UserPersona = () => (
  <div className="section">
    <h2>User Personas</h2>
    <p>User personas illustrate the needs of different user segments, aiding in empathetic design.</p>
  </div>
);

const UseCases = () => (
  <div className="section">
    <h2>Use Cases</h2>
    <p>Use cases depict feature utilization scenarios, clarifying functional requirements.</p>
  </div>
);

const Wireframes = () => (
  <div className="section">
    <h2>Wireframes/Mockups</h2>
    <p>Wireframes/mockups visually represent the user interface, facilitating feedback before development.</p>
  </div>
);

const FunctionalSpecs = () => (
  <div className="section">
    <h2>Functional Specifications</h2>
    <p>Functional specifications outline feature behaviors and integrations, serving as a blueprint for development.</p>
  </div>
);

const DataRequirements = () => (
  <div className="section">
    <h2>Data Requirements</h2>
    <p>Data requirements and integration points with existing systems are addressed.</p>
  </div>
);

const AcceptanceCriteria = () => (
  <div className="section">
    <h2>Acceptance Criteria</h2>
    <p>Acceptance criteria define conditions for feature completion and release readiness.</p>
  </div>
);

const App = () => (
  <div className="app">
    <h1>Product Requirements Document (PRD)</h1>
    <UserPersona />
    <UseCases />
    <Wireframes />
    <FunctionalSpecs />
    <DataRequirements />
    <AcceptanceCriteria />
  </div>
);

export default App;
