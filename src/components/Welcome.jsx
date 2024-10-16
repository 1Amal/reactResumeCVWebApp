// Welcome Page with Instructions

export default function Welcome({ onNavigate }) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This App will let you create a CV/résumé</p>
      <button onClick={() => onNavigate("EditResume")}>Create Resume</button>
    </div>
  );
}
