
import CardItem from './CardItem';

function Images(props) {
    return (
    <div className="container">
        <div className="row">
            {props.data.map(({id, url, title, thumbnailUrl})=> 
                <div 
                    key={id} 
                    className="col-3"
                >
                    <CardItem 
                        url={url}
                        title={title} 
                        thumbnailUrl={thumbnailUrl}
                    />
                </div>
            )}
        </div>
    </div>
    );

    
}


export default Images;