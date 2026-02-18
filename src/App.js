import logo from './logo.svg';
import './App.css';
import Folder from './Folder';
import { useState } from 'react';

function App() {
  const [folders, setFolders] = useState({
  id: "root",
  name: "Root",
  children: []
});

const addFolder = (tree, parentId) => {
  if (tree.id === parentId) {
    const newFolder = {
      id: Date.now().toString(),
      name: "New Folder",
      children: []
    };

    return {
      ...tree,
      children: [...tree.children, newFolder]
    };
  }

  return {
    ...tree,
    children: tree.children.map(child =>
      addFolder(child, parentId)
    )
  };
};


const deleteFolder = (tree, folderId) => {
  return {
    ...tree,
    children: tree.children
      .filter(child => child.id !== folderId)
      .map(child => deleteFolder(child, folderId))
  };
};


  const handleAdd = (parentId) => {
  setFolders(prev => addFolder(prev, parentId));
};

const handleDelete = (id) => {
  if (id === "root") return; // prevent deleting root
  setFolders(prev => deleteFolder(prev, id));
};

  return (
  <div className="App">
    <button onClick={() => handleAdd("root")}>
      Create Root Folder
    </button>

    <Folder
      folder={folders}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  </div>
);
}

export default App;
