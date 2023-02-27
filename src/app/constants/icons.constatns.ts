import { IconInfo } from '@interfaces/iconInfo.interfaces';

enum IconType {
  arrowtopright = 'arrowtopright',
  razoomart = 'razoomart',
  sparkles = 'sparkles',
  youtube = 'youtube',
}

export const IconList: { [key in IconType]: IconInfo } = {
  [IconType.arrowtopright]: {
    link: 'assets/icons/arrow-top-right.svg',
    description: 'arrow image',
  },
  [IconType.razoomart]: {
    link: 'assets/icons/razoomart.svg',
    description: 'razoomart image',
  },
  [IconType.sparkles]: {
    link: 'assets/icons/sparkles.png',
    description: 'sparkles image',
  },
  [IconType.youtube]: {
    link: 'assets/icons/youtube.svg',
    description: 'youtube image',
  },
};
