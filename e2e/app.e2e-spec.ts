import { MynewprojectadddPage } from './app.po';

describe('mynewprojectaddd App', function() {
  let page: MynewprojectadddPage;

  beforeEach(() => {
    page = new MynewprojectadddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
