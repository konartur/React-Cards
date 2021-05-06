import PropTypes from 'prop-types';

function CardItem({url, title, thumbnailUrl}) {
    return (
        <div className="card" >
            <img src={url} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={thumbnailUrl} className="btn btn-primary">Go somewhere</a>
            </div>
    </div>
    )
}

CardItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    thumbnailUrl: PropTypes.string
}

CardItem.defaultProps = {
    title: "default title",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
}

export default CardItem;