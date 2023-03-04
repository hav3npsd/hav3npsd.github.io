import { ImageInfo } from '@interfaces/imageInfo.interfaces';

enum ImageType {
  ilyaK = 'ilyaK',
  ilyaU = 'ilyaU',
  artem = 'artem',
  albina = 'albina',
  maksim = 'maksim',
  nabsvHi = 'nabsvHi',
  nabsvWork = 'nabsvWork',
  vodovozDesktop = 'vodovozDesktop',
  vodovozMobile = 'vodovozMobile',
  gustavoFringGreen = 'gustavoFringGreen',
  gustavoFringOrange = 'gustavoFringOrange',
  gustavoFringPink = 'gustavoFringPink',
  gustavoFringPurple = 'gustavoFringPurple',
  gustavoFringRed = 'gustavoFringRed',
  wantBuyDesign = 'wantBuyDesign',
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
  [ImageType.vodovozDesktop]: {
    link: 'assets/images/project-preview/ui-ux/vodovoz-desktop.webp',
    description: 'project preview image',
  },
  [ImageType.vodovozMobile]: {
    link: 'assets/images/project-preview/ui-ux/vodovoz-mobile.webp',
    description: 'project preview image',
  },
  [ImageType.gustavoFringGreen]: {
    link: 'assets/images/project-preview/digital-art/gustavo-fring-green.webp',
    description: 'digital art work preview image',
  },
  [ImageType.gustavoFringOrange]: {
    link: 'assets/images/project-preview/digital-art/gustavo-fring-orange.webp',
    description: 'digital art work preview image',
  },
  [ImageType.gustavoFringPink]: {
    link: 'assets/images/project-preview/digital-art/gustavo-fring-pink.webp',
    description: 'digital art work preview image',
  },
  [ImageType.gustavoFringPurple]: {
    link: 'assets/images/project-preview/digital-art/gustavo-fring-purple.webp',
    description: 'digital art work preview image',
  },
  [ImageType.gustavoFringRed]: {
    link: 'assets/images/project-preview/digital-art/gustavo-fring-red.webp',
    description: 'digital art work preview image',
  },
  [ImageType.wantBuyDesign]: {
    link: 'assets/images/want-buy.webp',
    description: 'want to buy design image',
  },
  [ImageType.nabsvHi]: {
    link: 'assets/images/memojis/nabsv-hi.webp',
    description: 'memoji icon',
  },
  [ImageType.nabsvWork]: {
    link: 'assets/images/memojis/nabsv-work.webp',
    description: 'memoji icon',
  },
};
