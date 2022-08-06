// import { useEffect, useState } from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonShowMore from '../../components/button-show-more/button-show-more';
import Footer from '../../components/footer/footer';
import ListFilms from '../../components/list-films/list-films';
import ListGenres from '../../components/list-genres/list-genres';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';
import { useAppDispatch, useAppSelector } from '../../hooks';

function Main(): JSX.Element {
  const filmPromo = useAppSelector((state) => state.promo);
  const { id, backgroundImage, posterImage, name, genre, released } = filmPromo;
  const films = useAppSelector((state) => state.films);

  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();
  const onClickPlayHandler = () => navigate(`/player/${id.toString()}`);

  const showMoreButtonClickHandle = () => {
    // dispatch(renderFilmsPerStep());
  };


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <SignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button"
                  type="button"
                  onClick={onClickPlayHandler}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListGenres />
          <ListFilms films={films} />
          {
            // films.length === filteredFilms.length ? '' :
            <ButtonShowMore onClick={showMoreButtonClickHandle} />
          }

        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
