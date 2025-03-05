import { LiveTrackProvider } from "livetrack-react";
import { LiveUsersWidget } from "./b";

function App() {
  return (
    <LiveTrackProvider apiKey="cb3648272b3d3e517f7e3f8858126653801fb45f">
      <LiveUsersWidget message="Viewing this page" />
    </LiveTrackProvider>
  );
}

export default App;
