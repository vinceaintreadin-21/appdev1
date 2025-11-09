export default function JSXRules() {
  const name = "React";

  return (
    <section className="rules-section">
      <h2>JSX Rules Demonstration</h2>

      {/* Rule: must have one parent */}
      <div>
        {/* Rule: camelCase attributes */}
        <p className="text-muted">Learning JSX with {name}</p>

        {/* Rule: all tags must be closed */}
        <img src="https://via.placeholder.com/100" alt="sample" />
      </div>
    </section>
  );
}
