import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import api from '@core/api';

const imageResolve = (source: string): ImageUrlBuilder =>
    imageUrlBuilder(api.client.readClient).image(source);

export default imageResolve;
