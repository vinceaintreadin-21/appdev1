import Message from "./Message";
import { Info, Warning } from "./Utils";

export default function RootComponent() {
  return (
    <div>
      <h1>Root Component</h1>
      <Message />
      <Info />
      <Warning />
    </div>
  );
}
