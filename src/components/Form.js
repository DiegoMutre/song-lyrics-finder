import { useState } from "react";

const Form = () => {
    // State for search
    const [search, setSearch] = useState({
        artist: "",
        song: "",
    });

    // When the user handle input
    const handleInputChange = e =>
        setSearch({ ...search, [e.target.name]: e.target.value });

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">
                                Song Lyrics Finder
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={handleInputChange}
                                            value={search.artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={handleInputChange}
                                            value={search.song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary float-right"
                                type="submit"
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
