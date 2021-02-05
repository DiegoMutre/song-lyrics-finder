import { useState } from "react";
import Form from "./components/Form";

function App() {
    // State for search terms
    const [searchTerms, setSearchTerms] = useState({});

    return (
        <>
            <Form setSearchTerms={setSearchTerms} />
        </>
    );
}

export default App;
