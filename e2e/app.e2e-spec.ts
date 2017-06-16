import { HerokuTestPage } from './app.po';

describe('heroku-test App', () => {
  let page: HerokuTestPage;

  beforeEach(() => {
    page = new HerokuTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
