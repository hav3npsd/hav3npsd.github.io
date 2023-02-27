import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';
import { razoomartLogoList } from '@pages/main/work/razoomartLogos.constants';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  public icons = IconList;
  public images = ImageList;

  public logo = IconList.razoomart.link;
  public logoList = razoomartLogoList;

  changeLogo(): void {
    let newLogo =
      this.logoList[Math.floor(Math.random() * this.logoList.length)];
    if (this.logo !== newLogo) this.logo = newLogo;
    else return this.changeLogo();
  }
}
