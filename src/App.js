import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
    // State for search terms
    const [searchTerms, setSearchTerms] = useState({});

    // State for lyrics
    const [lyrics, setLyrics] = useState("");

    // State for artist info
    const [artistInfo, setArtistInfo] = useState({});

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
                setLyrics(lyrics.data.lyrics);
                setArtistInfo(info.data.artists[0]);
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
