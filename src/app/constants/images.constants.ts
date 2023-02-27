import { ImageInfo } from '@interfaces/imageInfo.interfaces';

enum ImageType {
  ilyaK = 'ilyaK',
  ilyaU = 'ilyaU',
  artem = 'artem',
  albina = 'albina',
  maksim = 'maksim',
}

export const ImageList: { [key in ImageType]: ImageInfo } = {
  [ImageType.ilyaK]: {
    link: 'assets/images/memojis/ilyaK.webp',
    description: 'memoji icon',
  },
  [ImageType.ilyaU]: {
    link: 'assets/images/memojis/ilyaU.webp',
    description: 'memoji icon',
  },
  [ImageType.artem]: {
    link: 'assets/images/memojis/artem.webp',
    description: 'memoji icon',
  },
  [ImageType.albina]: {
    link: 'assets/images/memojis/albina.webp',
    description: 'memoji icon',
  },
  [ImageType.maksim]: {
    link: 'assets/images/memojis/maksim.webp',
    description: 'memoji icon',
  },
};
