import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
    // State for search terms
    const [searchTerms, setSearchTerms] = useState({});

    // Fetch the api
    useEffect(() => {
        if (Object.keys(searchTerms).length > 1) {
            const getLyrics = async () => {
                const { artist, song } = searchTerms;
                const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
                const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

                const [lyrics, info] = await Promise.all([
                    axios(url),
                    axios(url2),
                ]);
                console.log(lyrics, info);
            };
            getLyrics();
        }
    }, [searchTerms]);

    return (
        <>
            <Form setSearchTerms={setSearchTerms} />
        </>
    );
}

export default App;
