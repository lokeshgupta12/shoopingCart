import { MynewprojectPage } from './app.po';

describe('mynewproject App', function() {
  let page: MynewprojectPage;

  beforeEach(() => {
    page = new MynewprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
