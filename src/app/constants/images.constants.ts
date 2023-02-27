import { ImageInfo } from '@interfaces/imageInfo.interfaces';

enum ImageType {
  ilyaK = 'ilyaK',
}

export const ImageList: { [key in ImageType]: ImageInfo } = {
  [ImageType.ilyaK]: {
    link: 'assets/images/memojis/ilyaK.webp',
    description: 'memoji icon',
  },
};
