import { AppState } from "@app/store/reducers/app.reducers";
import { selectApp } from "@app/store/selectors/app/app.selectors";
import { createSelector } from "@ngrx/store";
import { ImageInterface } from "@shared/interfaces/image.interface";

export const selectImages = createSelector(selectApp, (state: AppState): ImageInterface[] => state.images);

export const selectImage = createSelector(
  selectImages,
  (images: ImageInterface[], id: number | string): ImageInterface => {
    const matching = images.filter(
      image => (!isNaN(Number(id)) && image.pk === +id) || (isNaN(Number(id)) && image.hash === id)
    );
    return matching.length > 0 ? matching[0] : null;
  }
);
