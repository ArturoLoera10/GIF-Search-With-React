export const GifItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={url} alt={title} loading="lazy" />
            <p>{title}</p>
        </div>
    );
};
