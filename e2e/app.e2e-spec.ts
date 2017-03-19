import { Meterial2Page } from './app.po';

describe('meterial2 App', () => {
  let page: Meterial2Page;

  beforeEach(() => {
    page = new Meterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
