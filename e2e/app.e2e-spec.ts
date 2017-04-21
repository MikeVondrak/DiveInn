import { DiveInnCLIPage } from './app.po';

describe('dive-inn-cli App', () => {
  let page: DiveInnCLIPage;

  beforeEach(() => {
    page = new DiveInnCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
