import React, { useState } from "react";

export default function Family({ familyTree }) {
  const [isVisible, setVisible] = useState(false);
  const expand = () => {
    setVisible(!isVisible);
  };

  return (
    <div style={{ padding: 10 }}>
      <span onClick={expand}>{familyTree.name}</span>

      {isVisible ? (
        familyTree?.children?.map((child) => {
          return (
            <div style={{ padding: 10 }}>
              <Family familyTree={child} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
