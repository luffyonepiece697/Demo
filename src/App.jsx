import { useState } from "react";
import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {
  const [visible, setVisible] = useState(false);

  function handleModalVisibleFalse() {
    setVisible(false);
  }

  function handleModalVisibleTrue() {
    setVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={handleModalVisibleTrue} />
      <main>
        <PostsList isPosting={visible} onStopPost={handleModalVisibleFalse} />
      </main>
    </>
  );
}

export default App;
