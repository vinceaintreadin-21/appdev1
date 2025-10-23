import ModuleA from './ModuleA.jsx';
import ModuleB from './ModuleB.jsx';
import ModuleC from './ModuleC.jsx';

export default function RootModule() {
  return (
    <div>
      <h1>Hello from RootModule</h1>
      <ModuleA />
      <ModuleB />
      <ModuleC />
    </div>
  );
}
