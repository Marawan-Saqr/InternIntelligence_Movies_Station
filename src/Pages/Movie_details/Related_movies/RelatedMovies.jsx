import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { movieContext } from "../../../Contexts/MovieContext.jsx";
import Loading from "../../../Components/Loading/Loading.jsx";
import './RelatedMovies.css';

const RelatedMovies = () => {
  const { related, getRelatedMovies, loading } = useContext(movieContext);
  const { MOVIEID } = useParams(); // استخدام الت destructuring لتحسين الوضوح

  useEffect(() => {
    if (MOVIEID) { 
      getRelatedMovies(MOVIEID);
    }
  }, [MOVIEID]); // تحديث عند تغيير ID الفيلم

  if (loading) {
    return <Loading />;
  }

  // تحقق من أن هناك أفلام ذات صلة
  if (!related || related.length === 0) {
    return <h3 className="text-center text-muted">No Related Movies Found</h3>;
  }

  return (
    <div className="related-movies-container">
      <h2 className="section-title">Related Movies</h2>
      <div className="related-movies-grid">
        {related.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt={movie.title} 
              className="movie-poster"
            />
            <h5>{movie.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
