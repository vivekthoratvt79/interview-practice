import React from 'react'

const Folder = ({ folder, onAdd, onDelete }) => {
  return (
    <div style={{ marginLeft: 20 }}>
      📁 {folder.name}

      <button onClick={() => onAdd(folder.id)}>Create</button>
      {folder.id !== "root" && (
        <button onClick={() => onDelete(folder.id)}>Delete</button>
      )}

      {folder.children.map(child => (
        <Folder
          key={child.id}
          folder={child}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Folder;