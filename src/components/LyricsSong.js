import PropTypes from "prop-types";

const LyricsSong = ({ lyrics }) => {
    return (
        <>
            <h2>Lyrics of the Song</h2>
            <p className="letra">{lyrics}</p>
        </>
    );
};

LyricsSong.propTypes = {
    lyrics: PropTypes.string.isRequired,
};

export default LyricsSong;
