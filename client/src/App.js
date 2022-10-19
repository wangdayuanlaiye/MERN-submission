import './App.css';
import { Router } from "@gatsbyjs/reach-router";
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import EditView from './views/EditView';

function App() {
  return (
    <div>
      <Router>
        <IndexView path = "/"/>
        <CreateView path = "/pets/new"/>
        <DetailView path = "/pets/:id"/>
        <EditView path = "/pets/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;
