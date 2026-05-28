import "./App.css";
import Layout from "./components/Layout";
import MemberList from "./components/MemberList";
import { initialMembers } from "./mockData";
function App() {
  return (
    <Layout>
      <MemberList members={initialMembers} />
    </Layout>
  );
}
export default App;
