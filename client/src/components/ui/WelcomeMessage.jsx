function WelcomeMessage({ name, projectName }) {
  return (
    <p className="welcome-message" aria-live="polite">
      Welcome, <strong>{name}</strong>, to {projectName}.
    </p>
  );
}

export default WelcomeMessage;