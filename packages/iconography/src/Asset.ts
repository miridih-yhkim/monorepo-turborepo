type UploadedUrl = `//asset.bizhows.com/${string}.svg`;

class Asset {
  rawValue: UploadedUrl;

  constructor(value: UploadedUrl) {
    this.rawValue = value;
  }

  /**
   * 아이콘 구현할때 mask-image기법을 사용하기때문에, 크로매틱 환경에서 리소스가 불완전하게 로드되는경우가 많아서
   * 크로매틱환경에서는 undefined를 리턴하고 그렇지않으면 rawValue를 리턴합니다.
   *
   * - @see https://github.com/chromaui/chromatic-cli/blob/5366e6b8a73f606cdf48bec69176c090bdaf58c4/isChromatic.js#L4
   */
  get value(): UploadedUrl | undefined {
    const windowToCheck = typeof window !== "undefined" && window;
    const isChromatic = !!(
      windowToCheck &&
      (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
        windowToCheck.location.href.match(/chromatic=true/))
    );

    return isChromatic ? undefined : this.rawValue;
  }
}

export class IconUrl extends Asset {
  // 더 좋게 타입에러 내는 방법 없나?
  private readonly __IconUrl__ = "IconUrl";

  constructor(value: UploadedUrl) {
    super(value);
  }
}

export class BrandLogoUrl extends Asset {
  private readonly __BrandLogoUrl__ = "BrandLogoUrl";

  constructor(value: UploadedUrl) {
    super(value);
  }
}
