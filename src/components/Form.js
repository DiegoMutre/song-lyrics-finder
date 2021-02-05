import { useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "../helpers/helper";
import Alert from "./Alert";

const Form = ({ setSearchTerms }) => {
    // State for search
    const [search, setSearch] = useState({
        artist: "",
        song: "",
    });

    // State for error
    const [isError, setIsError] = useState(false);

    // When the user handle input
    const handleInputChange = e =>
        setSearch({ ...search, [e.target.name]: e.target.value });

    // Validate form
    const handleFormSubmit = e => {
        e.preventDefault();

        if (Object.values(search).some(input => isEmpty(input))) {
            setIsError(true);
            return;
        }

        setIsError(false);
        setSearchTerms(search);
    };

    return (
        <div className="bg-info">
            {isError && <Alert message="All Fields are Required" />}
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleFormSubmit}
                    >
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

Form.propTypes = {
    setSearchTerms: PropTypes.func.isRequired,
};

export default Form;
