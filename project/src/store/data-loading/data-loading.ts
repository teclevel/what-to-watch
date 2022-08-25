import { createSlice } from '@reduxjs/toolkit';
import { AppRoute, NameSpace } from '../../const';
import { DataLoading } from '../../types/state';
import { redirectToRoute } from '../action';
import { fetchLoadCommentsAction, fetchLoadFilmAction, fetchLoadPromoAction, fetchLoadSimilarFilmsAction } from '../api-actions';

const initialState: DataLoading = {
  similarFilms: [],
  isSimilarFilmsLoaded: false,

  film: undefined,
  isFilmLoaded: false,

  promo: undefined,
  isPromoLoaded: false,

  comments: [],
  isCommentsLoaded: false,
};

export const dataLoading = createSlice({
  name: NameSpace.DataLoading,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLoadSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsLoaded = false;
      })
      .addCase(fetchLoadSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsLoaded = true;
      })

      .addCase(fetchLoadPromoAction.pending, (state) => {
        state.isPromoLoaded = false;
      })
      .addCase(fetchLoadPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isPromoLoaded = true;
      })



      // .addCase(fetchLoadFilmAction.pending, (state) => {
      //   state.isFilmLoaded = false;
      // })
      .addCase(fetchLoadFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoaded = true;
      })
      .addCase(fetchLoadFilmAction.rejected, (state, action) => {
        state.isFilmLoaded = false;
        // redirectToRoute(AppRoute.NotFound); //  ??????????????????????
      })



      .addCase(fetchLoadCommentsAction.pending, (state) => {
        state.isCommentsLoaded = false;
      })
      .addCase(fetchLoadCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoaded = true;
      })
      .addCase(fetchLoadCommentsAction.rejected, (state, action) => {
        state.isCommentsLoaded = true;
      });
  }
});
